const User = require("../models/User");
const AppError = require("../shared/errors/AppError");

module.exports = {
  async show(request, response) {
    return response.render("create-user", { title: "Criar usuário" });
  },
  
  async create(request, response) {
    const {
      name,
      email,
      age,
      country,
      city
    } = request.body;

    const userExist = await User.findOne({
      where: {
        email
      }
    });

    if (userExist) {
      throw new AppError("Já existe um usuário com esse email!");
    }

    await User.create({
      name,
      email,
      age,
      country,
      city
    });

    return response.redirect("/");
  }
};