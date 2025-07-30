const { User} = require('../models/user');

async function getAllUsers() {
    const user = await User.find({});

    return user;
}

async function saveUser(username, password, email) {
    const user = new User({username, password, email});
    console.log('new user created ' , user);
    await user.save();
}

async function updateAUser(userId, userData) {
    const updatedUser = await User.findByIdAndUpdate(userId, userData);

    return res.json(updateAUser);
}

module.exports = {getAllUsers, saveUser, updateAUser};