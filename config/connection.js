const mysql = require("mysql");
let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localHost",
    user: "root",
    password: "password123",
    database: "burgers_db"
  });
}

connection.connect();

module.exports = connection;
