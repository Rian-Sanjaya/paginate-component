import React from 'react';

export function BigNumberInput({onSubmit, buttonText, ...otherProps}) {
  let input;
  return (
    <div className="input-group input-group-sm mb-3">
      <input
        ref={node => (input = node)}
        type="number"
        min="1"
        className="form-control"
        {...otherProps}
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-secondary"
          onClick={() => onSubmit(Number(input.value))}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}