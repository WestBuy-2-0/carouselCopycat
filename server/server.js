const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const {connection, retrieveRandomProducts} = require('./db.js');
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(express.static('dist'));
app.use(express.urlencoded({extended: true}));

// Successfully demonstrated connection between server and database on Postman
// app.get('/test', (req, res) => {
//   testQuery((error, results) => {
//     if (error) {
//       res.status(404).send('Database not found.');
//     } else {
//       res.send(results);
//     }
//   });
// });

app.get('/products', (req, res) => {
  retrieveRandomProducts((error, results) => {
    if (error) {
      res.status(404).send('Database not found.');
    } else {
      res.send(results);
    }
  });
});

app.listen(port, () => console.log(`Listening on ${port}...`));
