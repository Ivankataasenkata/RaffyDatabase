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
    const updatedUser = await User.findByIdAndUpdate(userId, userData, { new: true });

   if (!updatedUser) {
        // Handle the case where no user was found
        throw new Error('User not found');
    }

    return updatedUser.populate('reservationId');
}

async function getAUserByName(username) {
    return await User.findOne({ username }).populate('reservationId');
}

module.exports = {getAllUsers, saveUser, updateAUser,getAUserByName};