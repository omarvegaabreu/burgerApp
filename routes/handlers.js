const express = require("express");
const router = express.Router();

//orm.js file import
const orm = require("../config/orm");

router.get("/", (req, res) => {
  orm.selectAll((error, burgers) => {
    if (error) {
      return res.status(501).json({
        message: "Unable to query the database"
      });
    }
    res.render("index");
  });
});

module.exports = router;
