const usersApi = require("../apis/Users/routes");
const inscritosApi = require("../apis/Inscritos/routes");
const eventosApi = require("../apis/Eventos/routes");
const { createToken } = require("../apis/Users/services/auth.service");

module.exports = (app) => {
    app.use("/auth", createToken);
    app.use("/users-api", usersApi);
    app.use("/inscritos-api", inscritosApi);
    app.use("/eventos-api", eventosApi);
};
