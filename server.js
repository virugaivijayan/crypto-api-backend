const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());

app.get('/api/signal/BTCUSDT', (req, res) => {
  res.json({
    symbol: 'BTCUSDT',
    price: '62540.50',
    rsi: 27.45,
    macd: 'Bearish',
    signal: 'BUY',
    time: '2:03 PM',
    triggered: true
  });
});

app.get('/', (req, res) => {
  res.send('Crypto API is running!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
