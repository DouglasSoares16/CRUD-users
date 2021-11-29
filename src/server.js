require("./database/connection");
require("express-async-errors");

const express = require("express");
const routes = require("./routes");
const hbsConfig = require("./config/handlebars");
const error = require("./middlewares/error");

const { engine } = require("express-handlebars");
const { join } = require("path");

const app = express();

app.engine("handlebars", engine(hbsConfig));
app.set("view engine", "handlebars");
app.set("views", join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(routes);

app.use(error);

app.listen(5500, () => console.log("rodando"));