import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = async () => {
    const api_url = "	https://api.adviceslip.com/advice";

    await axios
      .get(api_url)
      .then((response) => {
        setQuote(response.data.slip.advice);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container ">
        <span className="quote"> " {quote} "</span>
        <button className="btn" onClick={fetchAdvice}>
          Give me an Advice!
        </button>
      </div>
    </>
  );
};
export default App;
