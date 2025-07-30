const { getAllUsers, saveUser } = require("../services/userService");


module.exports = {
    getAllUsers: async (req, res) => {
        const users = await getAllUsers();

        return res.json(users);
    },

    createUser: async (req, res) => {
        try {
            const {username, password ,email} = req.body;

            await saveUser(username, password, email);
            res.status(201).json({username, password, email});

        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    }, 

    updateUser: async (req, res) => {
        const userId = req.params.id;
        const updateUserData = req.body;

        await updateAUser(userId, updateUserData);
    }
};