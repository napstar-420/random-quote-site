import React from "react";
import { FaTwitter, FaQuoteLeft } from "react-icons/fa";

const Quote = ({ quotes, number ,randomNumber }) => {

    if(quotes.length === 0){
        return(
            <h1>Loading</h1>
        )
    }

    console.log(quotes);
  
  return (
    <div className="quote-container">
      <h2 className="quote">
        <FaQuoteLeft style={{ marginRight: "0.8rem" }} />
        {quotes[number].text}
      </h2>
      <h3 className="author">_{quotes[number].author}</h3>
      <div className="btns-container">
        <button className="tweet-btn btn">
          <FaTwitter className="tweet-icon" />
          Tweet
        </button>
        <button className="next-btn btn" onClick={randomNumber}>Next Quote</button>
      </div>
    </div>
  );
};

export default Quote;
