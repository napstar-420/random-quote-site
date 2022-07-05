import React from "react";
import { FaTwitter, FaQuoteLeft } from "react-icons/fa";

const Quote = ({ quotes, number , randomNumber, opacity, setOpacity, color }) => {

    const textStyle = {
        color: color
    }

    const btnStyle = {
        backgroundColor: color,
        border: `2px solid ${color}`,
    }

    if(quotes.length === 0){
        return(
            <h1>Loading</h1>
        )
    }
  
  return (
    <div className="quote-container" style={{opacity: opacity, boxShadow: `-20px 20px ${color}`}}>
      <h2 className="quote" style={textStyle}>
        <FaQuoteLeft style={{ marginRight: "0.8rem" }} />
        {quotes[number].text}
      </h2>
      <h3 className="author" style={textStyle}>_{quotes[number].author}</h3>
      <div className="btns-container">
        <button className="tweet-btn btn" style={btnStyle}>
          <FaTwitter className="tweet-icon" style={{fontSize: '1rem'}}/>
          Tweet
        </button>
        <button className="next-btn btn" style={btnStyle} onClick={()=>{
            setOpacity(0);
            setTimeout(function(){randomNumber()},800)
        }}>Next Quote</button>
      </div>
    </div>
  );
};

export default Quote;
