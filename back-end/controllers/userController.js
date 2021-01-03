const db = require('../models/index');

const User = db.User;

module.exports = {

    async saveUser(req, res) {
        const { name, email, password } = req.body;
        try {
            const user = await User.create({ name, email, password })
            return res.json(user);
        }
        catch (error) {
            console.log(error)
        }
    },

    async getUserById(req, res) {
        const { user_id } = req.params;
        try {
            const user = await User.findByPk(user_id, {
                include: [{ association : "entity" }]
            });
            return res.json(user);
        }
        catch (e) {
            console.log(e)
        }
    }
};