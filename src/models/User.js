const {
  Model,
  DataTypes
} = require("sequelize");

class User extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      age: DataTypes.INTEGER,
      country: DataTypes.STRING,
      city: DataTypes.STRING,
    }, {
      sequelize
    });
  }
}

module.exports = User;