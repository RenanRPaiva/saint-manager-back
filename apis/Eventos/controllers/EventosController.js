const database = require('../../../dbConfig/db/models');

class EventoController { 
    static async getAllEventos(req, res){
        try {
            const eventosAll = await database.Eventos.findAll();
            return res.status(200).send(eventosAll);
        } catch (error) {
            return res.status(500).send(error.message);            
        }
    };

    static async getOneEvento(req, res){
        const { evento_id } = req.params;
        try {
            const oneEvento = await database.Eventos.findOne({ 
                where: {
                    id: Number(evento_id)
                }
             });
             return res.status(200).send(oneEvento);
        } catch (error) {
            return res.status(500).send(error.message);               
        }
    };

    static async createEvento(req, res){
        const newEvento = req.body
        try {
            const newCreatedEvento = await database.Eventos.create(newEvento);
            return res.status(200).send({ msg:"Evento Criado!", ...newCreatedEvento });
        } catch (error) {
            return res.status(500).send(error.message);                          
        }
    };
    static async editEvento(req, res){
        const { evento_id } = req.params;
        const newEventoInfo = req.body;
        try {
            await database.Eventos.update(newEventoInfo, {
                where: {
                    id: Number(evento_id)
                }
            });
            const updateEvento = await database.Eventos.findOne({ 
                where: {
                    id: Number(evento_id)
                }
             });
            return res.status(200).send({ msg:"Evento atualizado", ...updateEvento });
        } catch (error) {
            return res.status(500).send(error.message);
        }
    };
 };

 module.exports = EventoController;