const router = require('express').Router();


// Index
router.get('/', (req, res) => {
  let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: 'http://placekitten.com/250/250'
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: 'http://placekitten.com/250/250'
  }];  
  res.render('places/index', { places });
});

// Show
router.get('/:id', (req, res) => {
  res.render('Show');
});

// New
router.post('/new', (req, res) => {
  res.render('New');
});

// Edit
router.put(':id/edit', (req, res) => {
  res.render('Edit');
});

module.exports = router;
