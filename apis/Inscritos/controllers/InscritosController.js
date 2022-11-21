const database = require('../../../dbConfig/db/models');
const ModelServiceInscrito = require('../services/model.service');
const inscritoServices = new ModelServiceInscrito("Inscritos");

class InscritoController {
    static async getInscrito(req, res) {
        const { user_id, inscrito_id } = req.params;
        try {
            const oneInscrito = await inscritoServices.getInscrito(inscrito_id, user_id)
             if (!oneInscrito){
                return res.status(404).send({msgError: "Inscrito não encontrado!"});
             }
             return res.status(200).send(oneInscrito);
        } catch (error) {
            return res.status(500).send(error.message);
        }
    };

    static async getInscritoPorEvento (req, res){
        const { eventoId } = req.params;
        try {
            const inscritos = await inscritoServices.getInscritoPorEvento(eventoId);
             return res.status(200).send(inscritos);
        } catch (error) {
            return res.status(500).send(error.message);            
        }
    };

    static async getInscritoPorUser (req, res){
        const { user_id } = req.params;
        try {
            const user = await inscritoServices.getInscritoPorUser(user_id);
             const inscrito = await inscritoServices.getAllInscritoPorUser(user_id)
             if (!user) {
                return res.status(203).send({ msgError: "Usuário não encontrado!" });
             }
             return res.status(200).send(inscrito);
        } catch (error) {
            return res.status(500).send(error.message);            
        }
    };

    static async disableUser(req, res) {
        const { user_id } = req.params;

        try {
            database.sequelize.transaction(async (trans) => { 
                await inscritoServices.disableUser(trans, user_id)
                await inscritoServices.disableInscrito(user_id, trans);
                return res.status(200).send({
                    message: `Inscrições ref. usuário ${user_id} cancelados!`
                });
             });
        } catch (error) {
            return res.status(500).send(error.message);           
        }
    };

    static async createInscrito(req, res){
        const { user_id } = req.params;
        const newInscrito = { ...req.body, user_id: Number(user_id) };
        try {
            const verifyingUser = await inscritoServices.verifyingUser(user_id);
             if (!verifyingUser){
                return res.status(400).send({msgError: "Usuário já inscrito!"});                
             };
            const createdInscrito = await inscritoServices.createInscrito(newInscrito);
            return res.status(200).send({ msgSuccess: "Cadastrado com Sucesso!", ...createdInscrito });
        } catch (error) {
            return res.status(500).send(error.message);
        }
    };

    static async editInscrito(req, res) {
        const { user_id, inscrito_id } = req.params;
        const newInscritoInfo = req.body;
        try {
            await inscritoServices.editInscrito(newInscritoInfo, inscrito_id, user_id);

            const updatedInscrito = await inscritoServices.getInscrito(inscrito_id);
             return res.status(200).send(updatedInscrito);
        } catch (error) {
            return res.status(500).send({ msg:"Erro ao atualizar o usuário!", error: error.message });
        }
    };

    static async deleteInscrito(req, res) {
        const { inscrito_id } = req.params;
        try {
            await inscritoServices.deleteInscrito(inscrito_id);
             return res.status(200).send({ msg: "Deletado com sucesso!" });
        } catch (error) {
            return res.status(500).send({ msg:"Erro ao deletar o usuário!", error: error.message });            
        }
    };
};

module.exports = InscritoController;
