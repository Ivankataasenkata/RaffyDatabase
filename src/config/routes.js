const {Router} = require('express');
const { getBreakfastMeals, getLunchMeals, getDinnerMeals, getBreakfastMealById, getLunchMealById, getDinnerMealById } = require('../controllers/mealController');
const { getAllUsers, createUser, updateUser, getUserByUsername } = require('../controllers/userController');

const { getReservation, createReservation, updateReservation, deleteReservation } = require('../controllers/reservationController');

const router = Router();

router.get('/breakfast', getBreakfastMeals);
router.get('/lunch', getLunchMeals);
router.get('/dinner', getDinnerMeals);

router.get('/breakfast/:id', getBreakfastMealById);
router.get('/lunch/:id', getLunchMealById);
router.get('/dinner/:id', getDinnerMealById);

router.get('/users', getAllUsers);
router.get('/users/:username', getUserByUsername);
router.post('/users', createUser);
router.put('/users/:id', updateUser);

router.get('/reservation/:id', getReservation);
router.post('/reservation', createReservation);
router.put('/reservation/:id', updateReservation);
router.delete('/reservation/:id', deleteReservation);


module.exports = {router};