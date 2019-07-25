//node dependencies
const express = require("express");
const router = express.Router();

//orm.js file import
const orm = require("../config/orm");

router.get("/", function(req, res) {
  orm.selectAll(function(error, result) {
    if (error) {
      return res.status(501).json({
        message: "Not able to query the database"
      });
    }
    res.render("index");
  });
});
module.exports = router;
