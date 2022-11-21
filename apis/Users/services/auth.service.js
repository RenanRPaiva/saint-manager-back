const jwt = require('jsonwebtoken');
const database = require('../../../dbConfig/db/models');
require('dotenv').config();

const createToken = async (req, res) => {
    const { email, senha, name, tipo } = req.body;
    try {
        const user = await database.Users.scope("all").findOne({ 
            where: {
                email: email
            }
         });
         if (user) {
            if (user.senha === senha){
                const payload = {
                    email: email,
                    name: name,
                    tipo: tipo
                };
                const token = jwt.sign(payload, process.env.JWT_KEY);
                res.set("Authorization", token);
                res.status(204).send("Success");
            }
         } else {
            return res.status(400).send("Invalid credentials");
         }
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const authMidUser = async (req, res, next) => {
    const token = req.headers.authorization;
    if (token){
        try {
            const payload = jwt.verify(token, process.env.JWT_KEY);
            if (payload.tipo === "Ativo" || "Inativo") {
                return next();
            } else {
            return res.status(400).send("Invalid token");
            }
        } catch (error) {
        return res.status(500).send(error.message);            
        }
    } else {
        return res.status(401).send("Não autorizado!");
    }
};

const authMidAdm = async (req, res, next) => {
    const token = req.headers.authorization;
    if (token){
        try {
            const payload = jwt.verify(token, process.env.JWT_KEY);
            if (payload.tipo === "Administrador") {
                return next();
            } else {
            return res.status(400).send("Invalid token");
            }
        } catch (error) {
        return res.status(500).send(error.message);            
        }
    } else {
        return res.status(401).send("Não autorizado!");
    }
};

module.exports = { 
    createToken,
    authMidUser,
    authMidAdm
 };