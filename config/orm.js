const connection = require("./connection");

const orm = {
  selectAll: () => {
    connection.query("SELECT * FROM restaurant_burger", (err, data) => {
      if (err) cb(err, null);
      cb(null, data);
    });
  }
};
