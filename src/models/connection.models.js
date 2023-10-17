const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

connection.connect((error) => {
  if (error) throw error;
  console.log(`Conectado ao BD: ${process.env.MYSQL_DATABASE}`);
});

module.exports = connection;
