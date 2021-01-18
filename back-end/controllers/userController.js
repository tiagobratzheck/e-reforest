const db = require('../models/index');

const User = db.User;

module.exports = {

    async saveUser(req, res) {
        const { name, email, password } = req.body;
        try {
            const user = await User.create({ name, email, password })
            return res.json(user);
        }
        catch (err) {
            console.log(res.status(500).json({ msg: err.message }));
        }
    },

    async getUserById(req, res) {
        const { user_id } = req.params;
        try {
            const user = await User.findByPk(user_id, {
                include: [{ association: "entity" }]
            });
            return res.json(user);
        }
        catch (err) {
            console.log(res.status(404).json({ msg: err.message }));
        }
    },

    async login(req, res) {
        const password = User.hashingPassword(req.body.password);
        try {
            const user = await User.findOne({
                attributes: ['name', 'email'],
                where: {
                    email: req.body.email,
                    password: password
                },
                raw: true
            });
            return res.json(user);
        }
        catch (err) {
            console.log(res.status(500).json({ msg: err.message }));
        }
    },

    async updateUserById(req, res) {        
        try {
            await User.update({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }, {
                where: { id: req.params.user_id },
                individualHooks: true                
            });
            return res.json({ msg: 'User updated' });
        }
        catch (err) {
            console.log(res.status(500).json({ err: 'Error while updating user' }));
        }
    },

    async deleteUser(req, res) {
        const { id } = req.params.user_id;
        try {
            const user_deleted = await User.destroy({ where: { id: id } });
            return res.json(user_deleted);
        }
        catch (err) {
            console.log(res.status(500).json({ err: 'Error while deleting user' }));
        }
    }
};








