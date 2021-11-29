const AppError = require("../shared/errors/AppError");

module.exports = (err, request, response, next) => {
  if (err instanceof AppError) {
    return response.render("error", { 
      title: "Error", 
      message: err.message,
      status: err.statusCode
    });
  }

  return response.status(500).json({
    status: "Error",
    message: "Internal Server Error"
  });
};