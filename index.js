const express = require("express");
const app = express();
const routes = require("./routes");
const PORT = process.env.PORT || 3003;

app.use(express.json());

app.get("/", (req, res) => res.send("Bem vindo ao meu API!"));

// routes(app);

app.listen(PORT, () => console.log(`O servidor está rodando na porta ${PORT}`));