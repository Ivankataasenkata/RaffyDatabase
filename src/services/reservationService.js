const {Reservation} = require('../models/Reservation');

async function getReservation(id) {
    return await Reservation.findById(id);
}

async function saveReservation(date, tableType, hour, people, userId) {
    const reservation = new Reservation({date, tableType, hour, people, userId});
    console.log('new reservation created ' , reservation);
    return await reservation.save();
}

async function updateAReservation(reservationId, reservationData) {
    const updateReservation = await Reservation.findByIdAndUpdate(reservationId, reservationData);

    console.log('find reservatin  - ' + updateReservation);

    return res.json(updateReservation);
}

async function deleteAReservation(reservationId, reservationData) {
    const updateReservation = await Reservation.findByIdAndDelete(reservationId, reservationData);

    return res.json(updateReservation);
}

module.exports = {
    getReservation,
    saveReservation,
    updateAReservation,
    deleteAReservation
};