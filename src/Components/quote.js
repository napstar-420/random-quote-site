import React from "react";
import { FaTwitter, FaQuoteLeft } from "react-icons/fa";

const Quote = ({ quotes, number , randomNumber, opacity, setOpacity }) => {

    if(quotes.length === 0){
        return(
            <h1>Loading</h1>
        )
    }
  
  return (
    <div className="quote-container" style={{opacity: opacity}}>
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
        <button className="next-btn btn" onClick={()=>{
            setOpacity(0);
            setTimeout(function(){randomNumber()},1000)
        }}>Next Quote</button>
      </div>
    </div>
  );
};

export default Quote;
