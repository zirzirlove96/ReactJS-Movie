import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

//코인을 실시간으로 체크하는 로직
function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div className="App">
      <h1>The Coins!</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((cc) => (
            <option>
              {cc.name} ({cc.symbol}) : $
              {cc.hasOwnProperty("quotes")
                ? cc.quotes.hasOwnProperty("USD")
                  ? cc.quotes.USD.price
                  : null
                : null}{" "}
              USD
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
