const express = require('express');
const app = express();

const winesRouter = express.Router();

const data = require('./wines.json');

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/api/v1', winesRouter);

winesRouter.get('/wines', function(req, res) {
  let results = data;
  let length = 0;
  let total = 0;
  let mostUnits = 0;
  let bestSeller;
  // Calculate average and total ratings
  for (let i = 0; i < results.wines.length; i++) {
    if (results.wines[i].ratings.length > 0) {
      length = 0;
      total = 0;
      for (let j = 0; j < results.wines[i].ratings.length; j++) {
        total += results.wines[i].ratings[j].stars;
        length++;
      }
      results.wines[i].numRatings = length;
      results.wines[i].avgRating = (Math.round(total / length));
    } else {
      results.wines[i].numRatings = 0;
      results.wines[i].avgRating = 0;
    }
    if (results.wines[i].unitsSold > mostUnits) {
      mostUnits = results.wines[i].unitsSold;
      bestSeller = results.wines[i];
    }
  }
  // Add best seller to object
  if (bestSeller) {
    for (let i = 0; i < results.wines.length; i++) {
      if (bestSeller.id === results.wines[i].id) {
        results.wines[i].bestSeller = true;
      } else {
        results.wines[i].bestSeller = false;
      }
    }
  }
  // Create array of vintage years
  results.vintage = [...new Set(results.wines.map(x => x.vintage).sort(function(a, b) {return a - b; }))];
  res.send(results);
});

app.listen(3000, function() {
  console.log('App listening on port 3000');
});
