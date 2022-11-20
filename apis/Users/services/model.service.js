const database = require("../../../dbConfig/db/models");
const { deleteUser } = require("../controllers/UsersController");

class ModelService{
    constructor(modelName){
        this.modelName = modelName;
    }

    async allUser() {
        return database[this.modelName].scope("all").findAll({
            paranoid: false
        });
    }

    async getAllAtivo() {
        return database[this.modelName].scope("Ativos").findAll();
    }

    async getAllInativo() {
        return database[this.modelName].scope("Inativos").findAll();
    }

    async getAllAdm() {
        return database[this.modelName].scope("Adm").findAll();
    }

    async getOne( userId ) {
        return database[this.modelName].findOne({
            where: {
                id: Number(userId)
            }
        });
    }

    async verifyingUser( email ) {
        return database[this.modelName].scope("all").findOne({
            where: {
                email: email
            }
        });
    }

    async createUser( name, email, senha, tipo ) {
        return database[this.modelName].scope("all").create({ 
            name,
            email,
            senha,
            tipo
         });
    }

    async restoureUser(user_id){
        return database[this.modelName].restore({ 
            where: {
                id: Number(user_id)
            }
         });
    }

    async updateUser( newUser, userId ){
        return database[this.modelName].scope("all").update(newUser, {
            where: {
                id: Number(userId)
            }
        });
    }

    async deleteUser( userId ){
        return database.Users.destroy({ 
            where: {
                id: Number(userId)
            }
         });
    }
}

module.exports = ModelService;