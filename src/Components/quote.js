import React from "react";

const Quote = () => {
  return <div className="quote-container">
    <h2 className="quote">Why are you dying to live when you are living to die </h2>
    <h3 className="author">-- Tupac Shakur</h3>
    <div className="btns-container">
        <button className="tweet-btn btn">Tweet</button>
        <button className="next-btn btn">Next Quote</button>
    </div>
  </div>;
};

export default Quote;
