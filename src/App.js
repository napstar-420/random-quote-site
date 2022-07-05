import Quote from "./Components/quote.js";
import Navbar from "./Components/navbar.js";
import "./index.css";
import { useEffect, useState } from "react";
function App() {
  const [quotes, setQuotes] = useState([]);

  const fetchQuotes = async () => {
    let response = await fetch("https://type.fit/api/quotes");
    let data = await response.json();
    setQuotes(data);
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Quote quotes={quotes} />
    </div>
  );
}

export default App;
