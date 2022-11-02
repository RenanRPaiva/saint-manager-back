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

    // static async getOne(req, res){
    //     const 
    // };
};

module.exports = UsersController;