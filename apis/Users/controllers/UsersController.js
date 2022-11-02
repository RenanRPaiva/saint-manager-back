const database = require("../../../dbConfig/db/models");
class UsersController {
    static async getAll(req, res){
        try {
            const allUsers = await database.Users.findAll();
            return res.status(200).send(allUsers); 
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }

    static async getOne(req, res){
            const { userId } = req.params;
            try {
                const user = await database.Users.findOne({
                    where: {
                        id: Number(userId)
                    }
                });
                if(!user) {
                    return res.status(404).send("Usuário não existe, tente outro ID.");
                }
                return res.status(200).send(user);
            } catch (error) {
                return res.status(500).send(error.message);
            }
    };
};

module.exports = UsersController;