const User = require("../models/User");

module.exports = {
  async show(request, response) {
    const {
      id
    } = request.params;

    const user = await User.findByPk(id);

    if (!user) {
      throw new Error("Usuário não existe!");
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