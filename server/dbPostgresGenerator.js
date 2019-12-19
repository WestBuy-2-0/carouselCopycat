const { Pool, Client } = require('pg');
const faker = require('faker');
const Promise = require('bluebird');

const client = new Client({
  user: 'api_user',
  host: 'localhost',
  database: 'carousel',
  password: 'password',
})

client.connect();

// client.query('SELECT NOW()', (err, res) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(res);
//   }
// })

const insertion = function () {
  const insertionArray = [];
  for (let i = 0; i < 1000000; i++) {
    var insertionPromise = new Promise(function(resolve, reject) {
      let values = [faker.commerce.productAdjective(), faker.commerce.product(), faker.commerce.price(), faker.image.image(), Math.floor(Math.random() * 10)]
      client.query('INSERT INTO products(category, name, price, image, stock) VALUES($1, $2, $3, $4, $5)', values, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      })
    })
    insertionArray.push(insertionPromise);
  }
  return Promise.all(insertionArray);
}



// Promise.map(insertions)
// client.query('INSERT INTO carousel(category, name, price, image) VALUES($1, $2, $3, $4)', values, (err, res) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(res);
//   }
// })

// insertion();

//'INSERT INTO carousel(category, name, price, image) VALUES($1, $2, $3, $4)'