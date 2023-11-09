const express = require('express');
const app = express();

require('dotenv').config();

//Middleware
app.set('views', __dirname + '/views/');
// app.set('views', '../views');
console.log(__dirname)
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));

// Routes
app.use('/places', require('./controllers/places'));

app.get('/', (req, res) => {
  res.render('home.jsx');
});

app.get('*', (req, res) => {
  res.render('Error');
});

app.listen(process.env.PORT, () => {
  console.log(`app listening on port: ${process.env.PORT}`);
});
//