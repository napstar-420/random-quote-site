import Quote from "./Components/quote.js";
import Navbar from "./Components/navbar.js";
import "./index.css";
import { useEffect, useState } from "react";
import { colors } from "./Components/colors";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [number, setNumber] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [color, setColor] = useState("#8a2be2");

  const fetchQuotes = async () => {
    let response = await fetch("https://type.fit/api/quotes");
    response = await response.json();
    setQuotes(response);
  };

  const randomNumber = () => {
    let n1 = Math.floor(Math.random() * (quotes.length - 0 + 1)) + 0;
    setNumber(n1);
    let n2 = Math.floor(Math.random() * (colors.length - 0 + 1)) + 0;
    setColor(colors[n2]);
    setOpacity(1);
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Quote
        quotes={quotes}
        number={number}
        opacity={opacity}
        setOpacity={setOpacity}
        randomNumber={randomNumber}
        color={color}
      />
    </div>
  );
}

export default App;
