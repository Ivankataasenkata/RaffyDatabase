const mongoose = require('mongoose');
const { Schema } = mongoose;

const userShema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    reservationId: { type: Schema.Types.ObjectId, ref: 'Reservation', required: false }
});

const User = mongoose.model('User', userShema);

module.exports = { User };