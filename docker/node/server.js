const express = require('express');

// Constants
const PORT = 3020;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello to everyone\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

