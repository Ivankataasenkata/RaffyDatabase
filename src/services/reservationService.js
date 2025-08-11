const {Reservation} = require('../models/Reservation');

async function getReservation(id) {
    return await Reservation.findById(id);
}

async function saveReservation(date, tableType, hour, people, userId) {
    const reservation = new Reservation({date, tableType, hour, people, userId});
    return await reservation.save();
}

async function updateAReservation(reservationId, reservationData) {
    const updateReservation = await Reservation.findByIdAndUpdate(reservationId, reservationData);
    return updateReservation;
}

async function deleteAReservation(reservationId, reservationData) {
    const deteleReservation = await Reservation.findByIdAndDelete(reservationId, reservationData);

    return deteleReservation;
}

module.exports = {
    getReservation,
    saveReservation,
    updateAReservation,
    deleteAReservation
};