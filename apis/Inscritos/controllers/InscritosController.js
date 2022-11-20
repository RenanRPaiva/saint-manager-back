const database = require('../../../dbConfig/db/models');

class InscritoController {
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

    static async getInscritoPorEvento (req, res){
        const { eventoId } = req.params;
        try {
            const inscritos = await database.Inscritos.findAndCountAll({ 
                where: { 
                    evento_id: Number(eventoId),
                    status: "Inscrito",
                    
                 }
             });
             return res.status(200).send(inscritos);
        } catch (error) {
            return res.status(500).send(error.message);            
        }
    };

    static async getInscritoPorUser (req, res){
        const { user_id } = req.params;
        try {
            const user = await database.Users.findOne({ 
                where: { 
                    id: Number(user_id)
                 }
             });
             const inscrito = await user.getInscritosConfirmados();
             if (!user) {
                return res.status(203).send({ msgError: "Usuário não encontrado!" });
             }
             return res.status(200).send(inscrito);
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

module.exports = InscritoController;
