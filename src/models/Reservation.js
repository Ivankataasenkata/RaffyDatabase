const mongoose = require('mongoose');
const { Schema } = mongoose;

const reservationShema = new Schema({
    date: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    tableType: { type: String, required: true },
    hour: { type: String, required: true },
    people: { type: Number, required: true }
});

const Reservation = mongoose.model('Reservation', reservationShema);

module.exports = { Reservation };