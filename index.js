const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/status', (req, res) => {
  res.json({
    temperature: 22.5,
    humidity: 45,
    powerUsage: 1500,
    networkTraffic: 100
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
