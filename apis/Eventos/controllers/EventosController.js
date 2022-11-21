const database = require('../../../dbConfig/db/models');
const ModelServiceEvento = require('../services/model.service');
const eventosServices = new ModelServiceEvento("Eventos");

class EventoController { 
    static async getAllEventos(req, res){
        try {
            const eventosAll = await eventosServices.eventosAll();
            return res.status(200).send(eventosAll);
        } catch (error) {
            return res.status(500).send(error.message);            
        }
    };

    static async getOneEvento(req, res){
        const { evento_id } = req.params;
        try {
            const oneEvento = await eventosServices.getOneEvento(evento_id);
             return res.status(200).send(oneEvento);
        } catch (error) {
            return res.status(500).send(error.message);               
        }
    };

    static async createEvento(req, res){
        const newEvento = req.body
        try {
            const newCreatedEvento = await eventosServices.createEvento(newEvento);
            return res.status(200).send({ msg:"Evento Criado!", ...newCreatedEvento });
        } catch (error) {
            return res.status(500).send(error.message);                          
        }
    };
    static async editEvento(req, res){
        const { evento_id } = req.params;
        const newEventoInfo = req.body;
        try {
            await eventosServices.editEvento(newEventoInfo, evento_id);
            const updateEvento = await eventosServices.getOneEvento(evento_id);
            return res.status(200).send({ msg:"Evento atualizado", ...updateEvento });
        } catch (error) {
            return res.status(500).send(error.message);
        }
    };

    static async deleteEvento(req, res){
        const { evento_id } = req.params;
        try {
            await eventosServices.deleteEvento(evento_id);
            return res.status(200).send({ msg:`O evento de ID: ${evento_id} foi deletado com sucesso!` });
        } catch (error) {
            return res.status(500).send(error.message);
        }
    };
 };

 module.exports = EventoController;