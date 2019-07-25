const connection = require("./connection");

selectAll: cb => {
  connection.query("SELECT * FROM restaurant_burger", (err, data) => {
    if (err) cb(err, null);
    cb(null, data);
  });
};
