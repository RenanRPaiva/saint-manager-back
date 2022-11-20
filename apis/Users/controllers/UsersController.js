const validator = require("validator");
const { MissingEmailException, InvalidTipoException } = require("../common/exceptions");
const ModelService = require("../services/model.service");
const usersServices = new ModelService("Users");
class UsersController {
    static async getAll(req, res){
        try {
            const allUsers = await usersServices.allUser();
            return res.status(200).send(allUsers); 
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }

    static async getAllAtivo(req, res){
        try {
            const allUsersAtivo = await usersServices.getAllAtivo();
            return res.status(200).send(allUsersAtivo); 
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }

    static async getAllInativo(req, res){
        try {
            const allUsersInativo = await usersServices.getAllInativo();
            return res.status(200).send(allUsersInativo); 
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }

    static async getAllAdm(req, res){
        try {
            const allUsersAdm = await usersServices.getAllAdm();
            return res.status(200).send(allUsersAdm); 
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }

    static async getOne(req, res){
            const { userId } = req.params;
            try {
                const user = await usersServices.getOne( userId );
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
            const isTipo = tipo === "Ativo" || "Inativo" || "Administrador";
            const isEmail = validator.isEmail(email);
    
            if (!isEmail) throw new MissingEmailException();
            if (!isTipo) throw new InvalidTipoException();
            
            const verifyingUser = await usersServices.verifyingUser(email);
            if (verifyingUser) {
                return res
                .send("O usuário já está cadastrado", { verifyingUser });
            }
            const user = await usersServices.createUser( name, email, senha, tipo );
            return res.status(200).send({ msg: "Usuário cadastrado com sucesso!", ...user });
        } catch (error) {
            return res.status(500).send(error.message);
        }
    };

    static async editUser(req, res){
        const { userId } = req.params;
        const newUser = req.body;
        try {
            await usersServices.updateUser(newUser, userId);

            const  updateUser = await usersServices.getOne(userId);
             return res.status(200).send({ msg: "Usuário atualizado com sucesso!", ...updateUser });
        } catch (error) {
            return res.status(500).send(error.message);
        }
    };

    static async deleteUser(req, res) {
        const { userId } = req.params;
        try {
            await usersServices.deleteUser(userId);
             return res.status(200).send("Usuário deletado com sucesso!");
        } catch (error) {
            return res.status(500).send(error.message);
        }
    };
    
    static async restoreUser(req, res) {
        const { user_id } = req.params;
        try {
            await usersServices.restoureUser( user_id );
             return res.status(200).send("Usuário recuperado com sucesso!");
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }; 
};

module.exports = UsersController;