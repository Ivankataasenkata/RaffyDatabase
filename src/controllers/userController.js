const { getAllUsers, saveUser, updateAUser, getAUserByName } = require("../services/userService");


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
        const user = await updateAUser(userId, updateUserData);
        return res.json(user);
    },

    getUserByUsername: async (req, res) => {
    
    try {
            const {username} = req.params;
            const user = await getAUserByName(username);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    }
};