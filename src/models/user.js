const mongoose = require('mongoose');
const { Schema } = mongoose;

const userShema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }    
});

const User = mongoose.model('User', userShema);

module.exports = { User };