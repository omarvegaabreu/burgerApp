//Importing mysql
const mysql = require("mysql");

//initiating connection
let connection = mysql.createConnection({
  host: "localHost",
  user: "root",
  password: "",
  database: "burder_db"
});

connection.connect();

module.exports = connection;
