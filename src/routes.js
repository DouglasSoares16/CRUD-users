const { Router } = require("express");

const routes = Router();

routes.get("/", (request, response) => {
  return response.render("index", { title: "Dashboard" });
});

routes.get("/user/create", (request, response) => {
  return response.render("create-user", { title: "Criar usuário" });
});

routes.get("/user/edit", (request, response) => {
  return response.render("user-edit", { title: "Editar usuário" });
});

module.exports = routes;