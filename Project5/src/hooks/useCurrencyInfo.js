import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const baseUrl = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
  const fallbackUrl = `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`;

  useEffect(() => {
    fetch(baseUrl)
      .then((response) => {
        if (!response.ok) throw new Error("Primary fetch failed");
        return response.json();
      })
      .then((res) => setData(res[currency] || {}))
      .catch(() => {
        // Try fallback
        fetch(fallbackUrl)
          .then((resp) => resp.json())
          .then((res) => setData(res[currency] || {}))
          .catch((err) => {
            console.error("All fetch attempts failed:", err);
            setData({});
          });
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
