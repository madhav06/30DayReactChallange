import './App.css';
import axios from 'axios';
import {useEffect, useState} from "react";

function App() {

  const [fact, setFact] = useState("");

  /*METHOD 1: Consuming REST API's Using fetch */
  // const fetchFact = () => {
  //   fetch("https://catfact.ninja/fact")
  //   .then((response) => response.json())
  //   .then((data) => setFact(data.fact));
  // }

  /* METHOD 2: Consuming REST API's Using Axios */

  /* Use One method at a time to run the app, comment other method */ 
  const fetchFact = () => {
    axios.get("https://catfact.ninja/fact").then((response) => {
      setFact(response.data.fact)
    });
  }

  const handleClick = () => {
    fetchFact()
  }

  useEffect(() => {
    fetchFact()
  }, []);
  return (
    <div className="App">
      <h2>Press the button for a random cat fact!</h2>

      <hr/>

      <button onClick={() => handleClick()}>
        Get Cat fact
      </button>
      <p>{fact}</p>
    </div>
  );
}

export default App;
