const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
// const {connection, retrieveRandomProducts} = require('./db.js');
const {fetchTen, deleteEntry, addEntry, updateEntry} = require('./dbPostgres.js');
const port = process.env.PORT || 3000;
const path = require('path');
const indexHtml = path.join(__dirname, '..', 'dist', 'index.html');

app.use(express.json());
app.use(express.static('dist'));
app.use(express.urlencoded({extended: true}));
app.use(express.static(indexHtml));

app.get('/products', (req, res) => {
  fetchTen()
  .then((data) => {
    res.send(data.rows);
  })
  .catch((err) => {
    res.status(404).send('Error');
  })
});

app.post('/products', (req, res) => {
  addEntry(req.body)
  .then((data) => {
    res.end()})
    .catch((err) => {
      res.end();
    })
    res.end();
  })
  
app.put('/products', (req, res) => {
  updateEntry(req.body)
  .then((data) => {
    res.end();
  })
  .catch((err) => {
    res.end();
  })
})
  
app.delete('/products', (req, res) => {
  let id = req.query.id;
  deleteEntry(id)
  .then(() => {res.end()})
  .catch(() => {
    res.status(404).end()})
})
      
app.listen(port, () => console.log(`Listening on ${port}...`));
      
      
      
      
      
      // app.get('/products', (req, res) => {
      //   console.log('!!!')
      //   retrieveRandomProducts((error, results) => {
      //     if (error) {
      //       // res.status(404).send('Database not found.');
      //       res.send(error);
      //     } else {
      //       res.send(results);
      //     }
      //   });
      // });