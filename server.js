app.get("/api/signal/:symbol", (req, res) => {
  const { symbol } = req.params;

  let response = {
    symbol: symbol.toUpperCase(),
    price: "NA",
    rsi: "NA",
    macd: "NA",
    signal: "NA",
    time: "NA",
    triggered: false
  };

  if (symbol === "BTCUSDT") {
    response = {
      symbol: "BTCUSDT",
      price: "62540.50",
      rsi: 27.45,
      macd: "Bearish",
      signal: "BUY",
      time: "2:03 PM",
      triggered: true
    };
  } else if (symbol === "XAUUSD") {
    response = {
      symbol: "XAUUSD",
      price: "2324.12",
      rsi: 68.5,
      macd: "Bullish",
      signal: "BUY",
      time: "2:06 PM",
      triggered: true
    };
  } else if (symbol === "EURUSD") {
    response = {
      symbol: "EURUSD",
      price: "1.0857",
      rsi: 41.2,
      macd: "Bearish",
      signal: "WAIT",
      time: "2:08 PM",
      triggered: false
    };
  }

  res.json(response);
});
