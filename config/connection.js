//Importing mysql
const mysql = require("mysql");

//initiating connection
let connection = mysql.createConnection({
  host: "localHost",
  user: "root",
  password: "password123",
  database: "burgers_db"
});

connection.connect();

module.exports = connection;
