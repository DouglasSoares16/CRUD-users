const User = require("../models/User");

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
      throw new Error("Usuário não existe!");
    }

    await User.destroy({
      where: {
        id
      }
    });

    return response.redirect("/");
  }
};