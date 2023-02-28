import React, { useState } from "react";

const LeadingDebouncing = ({ show, view, subHeading }) => {
  const [text, setText] = useState();
  const [items, setItems] = useState([]);

  const Debounce = (func, delay) => {
    let timeoutId = null;
    return (...args) => {
      if (timeoutId === null) {
        func.call(this, ...args);
      }
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        timeoutId = null;
      }, delay);
    };
  };
  const debouncedFunc = (e) => {
    setText(e.target.value);
    let itemText = "Added to cart";
    setItems([...items, itemText]);
    console.log("Hi");
  };
  const decoratedDebounce = Debounce(debouncedFunc, 300);

  return (
    <div className="layout">
      {show ? (
        <input
          type="text"
          placeholder="Suggestions for..."
          onInput={decoratedDebounce}
        />
      ) : (
        <button onClick={decoratedDebounce}>Add to cart</button>
      )}
      <h1 className="sub-heading">{subHeading}</h1>
      {text ? (
        <p>{text}</p>
      ) : (
        <p style={{ color: "grey" }}>{items.length < 1 && view}</p>
      )}
      {!show &&
        items.length !== 0 &&
        items.map((item, index) => <p key={index}>{item}</p>)}
    </div>
  );
};

export default LeadingDebouncing;
