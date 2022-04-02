const express = require("express");

// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();

// MIDDLEWARE
app.set("views", __dirname + "/views");
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static("public"));

//routes
app.get("/", (req, res) => {
  res.send("Welcome to an answome app about breads");
});
// 404 Page
app.get("*", (req, res) => {
  res.send("404");
});

//breads
const breadsController = require(".controllers/breads_controller.js");
app.use("/breads", breadsController);

//listen
app.listen(PORT, () => {
  console.log("nomming at port", PORT);
});