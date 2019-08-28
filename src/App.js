import React from 'react';
import { Pagination } from './Pagination'
import { Tweet } from './Tweet'
import { BigNumberInput } from './BigNumberInput'

// generate an array with 'count' no. of object
const makeTweets = count => 
  Array.from({ length: count }).map( (_, i) => ({
    id: i + 1,
    username: `CoolCat${i + 1}`,
    content: `Some really great content here (${i + 1})`
  }))

function Paginate({ children, items, page, perPage }) {
  const endSlice = page * perPage

  return children({
    items: items.slice(endSlice - perPage, endSlice), // the items to be display
    lastPage: Math.ceil(items.length / perPage) // last page no. of the pagination
  })
}

class App extends React.Component {
  state = {
    tweets: makeTweets(30),
    page: 1,
  }

  setPage = page => this.setState({ page })

  requestTweets = numToRequest => {
    this.setState({ tweets: makeTweets(numToRequest), page: 1 })
  }

  render() {
    const { tweets, page } = this.state

    return (
      <div className="container">
        <BigNumberInput
          buttonText="Request Tweets"
          defaultValue={30}
          onSubmit={numToRequest => this.requestTweets(numToRequest)}
        />

        <div className="list-group">
          <Paginate items={tweets} page={page} perPage={3}>
            {
              ({ items, lastPage }) => (
                <div>
                  {items.map( tweet => (
                    // <div key={tweet.id}>{tweet.username}</div>
                    <Tweet key={tweet.id} tweet={tweet} />
                  ))}
                  <Pagination
                    page={page}
                    lastPage={lastPage}
                    setPage={this.setPage}
                  />
                </div>
              )
            }
          </Paginate>
        </div>
      </div>
    )
  }
}

export default App;
