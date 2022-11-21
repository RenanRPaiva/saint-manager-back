const database = require("../../../dbConfig/db/models");

class ModelServiceInscrito {
    constructor(modelName){
        this.modelName = modelName;
    }

    async getInscrito(inscrito_id, user_id){
        return database[this.modelName].findOne({ 
            where: {
                id: Number(inscrito_id),
                user_id: Number(user_id)
            }
         });
    }

    async getInscritoPorEvento(eventoId){
        return database[this.modelName].findAndCountAll({ 
            where: { 
                evento_id: Number(eventoId),
                status: "Inscrito",                
             }
         });
    }

    async getInscritoPorUser(user_id){
        return database[this.modelName].findOne({ 
            where: { 
                id: Number(user_id)
             }
         });
    }

    async getAllInscritoPorUser(user_id){
        return database[this.modelName].findAll({
            where: {
                user_id: user_id,
                status: "Inscrito"
            }
        });
    }
    
    async disableUser(trans, user_id){
        return database.Users.update(
            { tipo: "Inativo" },
            { where: { id: Number(user_id) } },
            { transaction: trans }
        );
    }

    async disableInscrito(user_id, trans){
        return database[this.modelName].update(
            { status: "Cancelado" },
            {
                where:{
                   user_id: Number(user_id) 
                }
            },
            { transaction: trans }
        );
    }
    
    async verifyingUser(user_id){
        return database[this.modelName].findAll({ 
            where: {
                user_id: Number(user_id)
            }
         });
    }
    
    async createInscrito(newInscrito){
        return database.Inscritos.create(newInscrito);
    }

    async editInscrito(newInscritoInfo, inscrito_id, user_id){
        return database[this.modelName].update(newInscritoInfo, {
            where: {
                id: Number(inscrito_id),
                user_id: Number(user_id)
            }
        });
    }

    async getInscrito(inscrito_id){
        return database[this.modelName].findOne({ 
            where: { 
                id: Number(inscrito_id)
             }
         });
    }

    async deleteInscrito(inscrito_id){
        return database[this.modelName].destroy({ 
            where: {
                id: Number(inscrito_id)
            }
         });
    }
};

module.exports = ModelServiceInscrito;