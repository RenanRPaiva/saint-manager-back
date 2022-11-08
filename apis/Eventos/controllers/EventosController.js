const database = require('../../../dbConfig/db/models');

class EventoController { 
    static async getAllEventos(req, res){
        try {
            const eventosAll = await database.Eventos.findAll();
            return res.status(200).json(eventosAll);
        } catch (error) {
            return res.status(500).json(error.message);            
        }
    };
 };

 module.exports = EventoController;