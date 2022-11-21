const database = require("../../../dbConfig/db/models");
const { deleteEvento } = require("../controllers/EventosController");

class ModelServiceEvento{
    constructor(modelName){
        this.modelName = modelName;
    }

    async eventosAll(){
        return database[this.modelName].findAll();
    }

    async getOneEvento(evento_id){
        return database[this.modelName].findOne({ 
            where: {
                id: Number(evento_id)
            }
         });
    }

    async createEvento(newEvento){
        return database[this.modelName].create(newEvento);
    }

    async editEvento(newEventoInfo, evento_id){
        return database[this.modelName].update(newEventoInfo, {
            where: {
                id: Number(evento_id)
            }
        });
    }
    
    async deleteEvento(evento_id){
        return database[this.modelName].destroy({ 
            where: {
                id: Number(evento_id)
            }
         });
    }
}

module.exports = ModelServiceEvento;