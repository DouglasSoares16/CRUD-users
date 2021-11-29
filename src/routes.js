const { Router } = require("express");

const CreateUserController = require("./controllers/CreateUserController");
const DashboardController = require("./controllers/DashboardController");
const UserEditController = require("./controllers/UserEditController");

const routes = Router();

routes.get("/", DashboardController.show);
routes.post("/user/delete/:id", DashboardController.delete);

routes.get("/user/create", CreateUserController.show);
routes.post("/user/create", CreateUserController.create);

routes.get("/user/edit/:id", UserEditController.show);
routes.post("/user/edit/:id", UserEditController.update);

module.exports = routes;