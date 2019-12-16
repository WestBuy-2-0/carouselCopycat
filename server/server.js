const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const {connection, retrieveRandomProducts} = require('./db.js');
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(express.static('dist'));
app.use(express.urlencoded({extended: true}));

app.get('/products', (req, res) => {
  retrieveRandomProducts((error, results) => {
    if (error) {
      // res.status(404).send('Database not found.');
      res.send(error);
    } else {
      res.send(results);
    }
  });
});

app.listen(port, () => console.log(`Listening on ${port}...`));
