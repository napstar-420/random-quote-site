import React from "react";
import { FaTwitter, FaQuoteLeft } from "react-icons/fa";

const Quote = () => {
  return <div className="quote-container">
    <h2 className="quote"><FaQuoteLeft style={{marginRight: '0.8rem'}}/>Why are you dying to live when you are living to die </h2>
    <h3 className="author">_Tupac Shakur</h3>
    <div className="btns-container">
        <button className="tweet-btn btn"><FaTwitter className="tweet-icon"/>Tweet</button>
        <button className="next-btn btn">Next Quote</button>
    </div>
  </div>;
};

export default Quote;
