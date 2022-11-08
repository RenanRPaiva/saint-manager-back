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
 };

 module.exports = EventoController;