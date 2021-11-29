require("./database/connection");

const express = require("express");
const routes = require("./routes");
const hbsConfig = require("./config/handlebars");

const { engine } = require("express-handlebars");
const { join } = require("path");

const app = express();

app.engine("handlebars", engine(hbsConfig));
app.set("view engine", "handlebars");
app.set("views", join(__dirname, "views"));

app.use(routes);

app.listen(5500, () => console.log("rodando"));