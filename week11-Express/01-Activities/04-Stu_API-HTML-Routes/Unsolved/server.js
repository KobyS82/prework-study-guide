// TODO: Import express
const express = require('express');

// TODO: Import 'terms.json' file
const termsData = require('./terms.json')
const PORT = 3001;

// TODO: Initialize app variable
const app = express();

// TODO: Create a route for a GET request that will return the content of our `terms.json` file
app.get('/', (rew, res) => 
res.send('Go to http://localhost:3001/api'));

app.get('/api', (req, res) => res.json(termsData));

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
