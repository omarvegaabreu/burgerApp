//Importing dependencies
const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

//Express application
const PORT = process.env.PORT || 9001;
const app = express();

//body parser and methodOverride middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride("_method"));

//handlebars middleware
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Setting up the server
app.listen(PORT, () => {
  console.log(`Server is starting at PORT ${PORT}`);
});
