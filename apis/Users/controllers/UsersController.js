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

    static async getInscrito(req, res) {
        const { user_id, inscrito_id } = req.params;
        try {
            const oneInscrito = await database.Inscritos.findOne({ 
                where: {
                    id: Number(inscrito_id),
                    user_id: Number(user_id)
                }
             });
             if (!oneInscrito){
                return res.status(404).send({msgError: "Inscrito não encontrado!"});
             }
             return res.status(200).send(oneInscrito);
        } catch (error) {
            return res.status(500).send(error.message);
        }
    };

    static async createInscrito(req, res){
        const { user_id } = req.params;
        const newInscrito = { ...req.body, user_id: Number(user_id) };
        try {
            const verifyingUser = await database.Inscritos.findOne({ 
                where: {
                    user_id: Number(user_id)
                }
             });
             if (!verifyingUser){
                return res.status(400).send({msgError: "Usuário já inscrito!"});                
             };
            const createdInscrito = await database.Inscritos.create(newInscrito);
            return res.status(200).send({ msgSuccess: "Cadastrado com Sucesso!", ...createdInscrito });
        } catch (error) {
            return res.status(500).send(error.message);
        }
    };

    static async editInscrito(req, res) {
        const { user_id, inscrito_id } = req.params;
        const newInscritoInfo = req.body;
        try {
            await database.Inscritos.update(newInscritoInfo, {
                where: {
                    id: Number(inscrito_id),
                    user_id: Number(user_id)
                }
            });

            const updatedInscrito = await database.Inscritos.findOne({ 
                where: {
                    id: Number(user_id)
                }
             });
             return res.status(200).send(updatedInscrito);
        } catch (error) {
            return res.status(500).send({ msg:"Erro ao atualizar o usuário!", error: error.message });
        }
    };

    static async deleteInscrito(req, res) {
        const { inscrito_id } = req.params;
        try {
            await database.Inscritos.destroy({ 
                where: {
                    id: Number(inscrito_id)
                }
             });
             return res.status(200).send({ msg: "Deletado com sucesso!" });
        } catch (error) {
            return res.status(500).send({ msg:"Erro ao deletar o usuário!", error: error.message });            
        }
    };
};

module.exports = UsersController;