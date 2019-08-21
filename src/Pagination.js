import React from 'react'

export function Pagination({ page, lastPage, setPage }) {
  const visiblePages = Array.from({ length: lastPage }).map( (_, i) => i + 1)

  return (
    <ul className="pagination justify-content-center mt-3">
      <li className="page-item">
        <button
          className="page-link"
          onClick={page > 1 ? () => setPage(page - 1) : null}
        >
          &laquo;
        </button>
      </li>

      {
        visiblePages.map( n => (
          <li key={n} className={`page-item ${n === page && 'active'}`}>
            <button className={"page-link"} onClick={ () => setPage(n) }>
              {n} <span className="sr-only">(current)</span>
            </button>
          </li>
        ))
      }

      <li className="page-item">
        <button
          className="page-link"
          onClick={page < lastPage ? () => setPage(page + 1) : null}
        >
          &raquo;
        </button>
      </li>
    </ul>
  )
}