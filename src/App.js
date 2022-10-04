import React from "react";
import TrailingDebouncing from "./components/TrailingDebouncing";
import LeadingDebouncing from "./components/LeadingDebouncing";

const App = () => {
  let show = true;

  return (
    <>

    <h1 className='title'>Trailing Debouncing</h1>
    <div className="debouncing">
      <TrailingDebouncing show={show} view='Nothing to preview' subHeading='Preview'/>
      <TrailingDebouncing view='Nothing to cart' subHeading='Cart'/>
    </div>
    <hr />
    <h1 className='title'>Leading Debouncing</h1>
    <div className="debouncing">
      <LeadingDebouncing show={show} view='Nothing to preview' subHeading='Preview'/>
      <LeadingDebouncing view='Nothing to cart' subHeading='Cart'/>
    </div>
    </>
  )
}

export default App
