const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'db-carousel.chpmnqo9n8lu.us-east-2.rds.amazonaws.com',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'inventory'
});

connection.connect();

const retrieveRandomProducts = callback => {
  connection.query('SELECT * FROM products WHERE id!=57 AND id!=46 AND id!=39 AND id!=53 AND id!=26 AND id!=100 AND id!=14 AND id!=60 AND id!=66 AND id!=95 ORDER BY RAND() LIMIT 10', (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports = {connection, retrieveRandomProducts};
