const usersApi = require("../apis/Users/routes");
const inscritosApi = require("../apis/Inscritos/routes");
const eventosApi = require("../apis/Eventos/routes");

module.exports = (app) => {
    app.get("/", (req, res) => res.send("Bem vindo ao meu API!"));
    app.use("/users-api", usersApi);
    app.use("/inscritos-api", inscritosApi);
    app.use("/eventos-api", eventosApi);
};
