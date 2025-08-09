
const { getReservation,updateAReservation, deleteAReservation, saveReservation } = require("../services/reservationService");


module.exports = {
    getReservation: async (req, res) => {
        const {id} = req.params;
        const reservation = await getReservation(id);

        return res.json(reservation);
    },

    createReservation: async (req, res) => {
        const { date, tableType, hour, people, userId } = req.body;

        try {
            const savedReservation = await saveReservation(date, tableType, hour, people, userId);
            console.log('in contorller create reservation id ' + saveReservation._id);
            return res.json(savedReservation);
        } catch (err) {
           return res.status(400).json({ message: err.message });
        }
    },

    updateReservation: async (req, res) => {
        const {id} = req.params;
        const reservationData = req.body;
        console.log('in controller ID - ' + id);
        console.log('in controller data - ' + JSON.stringify(reservationData));

        try {
            const updatedReservation = await updateAReservation(id, reservationData);
            console.log('in controller -' + updatedReservation);

            if (!updatedReservation) {
                return res.status(404).json({ message: 'Reservation not found' });
            }

            return res.json(updatedReservation);
        }
        catch (err) {
            return res.status(400).json({ message: err.message });
        }
    },

    deleteReservation: async (req, res) => {
        const {id} = req.params;
        const reservationData = req.body;

        try {
            const deletedReservation = await deleteAReservation(id, reservationData);
            
            if(!deletedReservation){
                return res.status(404).json({ message: 'Reservation not found' });
            }

            res.json({ message: 'Reservation deleted' });
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }
}