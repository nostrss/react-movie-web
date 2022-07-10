import { useState, useEffect } from 'react';

export const CoinTracker = () => {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <hr />
      <h1>Coin-Tracker {loading ? '' : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading..</strong>
      ) : (
        <ul>
          {coins.map((coin) => (
            <li>
              {coin.name}({coin.symbol}): {coin.quotes.USD.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CoinTracker;
