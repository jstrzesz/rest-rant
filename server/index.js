const express = require('express');
const app = express();

require('dotenv').config();

// Routes
app.use('/places', require('./controllers/places'));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('*', (req, res) => {
  res.status(404).send('<h1>404: Error</h1>');
})

app.listen(process.env.PORT, () => {
  console.log(`app listening on port: ${process.env.PORT}`);
});
