const User = require("../models/User");
const AppError = require("../shared/errors/AppError");

module.exports = {
  async show(request, response) {
    const users = await User.findAll();

    return response.render("index", { title: "Dashboard", users });
  },

  async delete(request, response) {
    const {
      id
    } = request.params;

    const userExists = await User.findByPk(id);

    if (!userExists) {
      throw new AppError("Usuário não existe!", 404);
    }

    await User.destroy({
      where: {
        id
      }
    });

    return response.redirect("/");
  }
};