import React from "react";
import { FaTwitter, FaQuoteLeft } from "react-icons/fa";

const Quote = ({quotes}) => {
    console.log(quotes);
  return <div className="quote-container">
    <h2 className="quote"><FaQuoteLeft style={{marginRight: '0.8rem'}}/>{quotes[0].text}</h2>
    <h3 className="author">_{quotes[0].author}</h3>
    <div className="btns-container">
        <button className="tweet-btn btn"><FaTwitter className="tweet-icon"/>Tweet</button>
        <button className="next-btn btn">Next Quote</button>
    </div>
  </div>;
};

export default Quote;
