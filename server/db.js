const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'inventory'
});

connection.connect();

// Successfully demonstrated connection between server and database on Postman
// const testQuery = callback => {
//   connection.query('SELECT 1 + 1 AS solution', (error, results) => {
//     if (error) {
//       callback(error, null);
//     } else {
//       callback(null, results);
//     }
//   });
// };

module.exports = connection;
