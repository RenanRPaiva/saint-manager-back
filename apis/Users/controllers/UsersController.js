const database = require("../../../dbConfig/db/models");
class UsersController {
    static async getAll(req, res){
        try {
            const allUsers = await database.Users.findAll();
            return res.status(200).send(allUsers); 
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }

    static async getOne(req, res){
            const { userId } = req.params;
            try {
                const user = await database.Users.findOne({
                    where: {
                        id: Number(userId)
                    }
                });
                if(!user) {
                    return res.status(404).send("Usuário não existe, tente outro ID.");
                }
                return res.status(200).send(user);
            } catch (error) {
                return res.status(500).send(error.message);
            }
    };

    static async createUser(req, res) {
        const { name, email, senha, tipo } = req.body;
        try {
            const verifyingUser = await database.Users.findOne({
                where: {
                    email: email
                }
            });
            if (verifyingUser) {
                return res
                .send("O usuário já está cadastrado", { verifyingUser });
            }
            const user = await database.Users.create({ 
                name,
                email,
                senha,
                tipo
             });
            return res.status(200).send({ msg: "Usuário cadastrado com sucesso!", ...user });
        } catch (error) {
            return res.status(500).send(error.message);
        }
    };

    static async editUser(req, res){
        const { userId } = req.params;
        const newUser = req.body;
        try {
            await database.Users.update(newUser, {
                where: {
                    id: Number(userId)
                }
            });

            const  updateUser = await database.Users.findOne({ 
                where: {
                    id: Number(userId)
                }
             });
             return res.status(200).send({ msg: "Usuário atualizado com sucesso!", ...updateUser });
        } catch (error) {
            return res.status(500).send(error.message);
        }
    };

    static async deleteUser(req, res) {
        const { userId } = req.params;
        try {
            await database.Users.destroy({ 
                where: {
                    id: Number(userId)
                }
             });
             return res.status(200).send("Usuário deletado com sucesso!");
        } catch (error) {
            return res.status(500).send(error.message);
        }
    };   
};

module.exports = UsersController;