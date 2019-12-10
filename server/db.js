const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'db-carousel.chpmnqo9n8lu.us-east-2.rds.amazonaws.com',
  port: 3306,
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
