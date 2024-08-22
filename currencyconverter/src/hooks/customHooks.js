import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});


  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
    .then((response) => response.json())
    .then((obj) => setData(obj[currency]))
    .catch(err => console.error(err));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;