const User = require("../models/User");
const AppError = require("../shared/errors/AppError");

module.exports = {
  async show(request, response) {
    const {
      id
    } = request.params;

    const user = await User.findByPk(id);

    if (!user) {
      throw new AppError("Usuário não existe!", 404);
    }

    return response.render("user-edit", { title: "Editar usuário", user });
  },

  async update(request, response) {
    const {
      id
    } = request.params

    const data = request.body;

    await User.update(data, {
      where:{
        id
      }
    });

    return response.redirect("/");
  }
};