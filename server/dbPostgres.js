const { Pool, Client } = require('pg');
const faker = require('faker');

const client = new Client({
  user: 'api_user',
  host: 'localhost',
  database: 'carousel',
  password: 'password'
});

client.connect();

const fetchTen = () => {
  return new Promise((resolve, reject) => {
    client.query('SELECT * FROM products ORDER BY random() LIMIT 10', (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    })
  })
}

const deleteEntry = (id) => {
  return new Promise((resolve, reject) => {
    client.query('DELETE FROM products WHERE id=$1', [id], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    })
  })
}

const addEntry = (values) => {
  return new Promise((resolve, reject) => {
    client.query('INSERT INTO products(category, name, price, image, stock) VALUES($1, $2, $3, $4, $5)', values, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    })
  })
}

const updateEntry = (params) => {
  return new Promise((resolve, reject) => {
    client.query('UPDATE products SET category=$1 WHERE id=$2', params, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    })
  })
}

module.exports = {fetchTen, deleteEntry, addEntry, updateEntry};