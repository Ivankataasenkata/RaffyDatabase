const {Router} = require('express');
const { getBreakfastMeals, getLunchMeals, getDinnerMeals, getBreakfastMealById, getLunchMealById, getDinnerMealById } = require('../controllers/mealController');
const { getAllUsers, createUser, updateUser } = require('../controllers/userController');
const userController = require('../controllers/userController');

const router = Router();

router.get('/breakfast', getBreakfastMeals);
router.get('/lunch', getLunchMeals);
router.get('/dinner', getDinnerMeals);

router.get('/breakfast/:id', getBreakfastMealById);
router.get('/lunch/:id', getLunchMealById);
router.get('/dinner/:id', getDinnerMealById);

router.get('/users', getAllUsers);
router.post('/users', createUser);
router.put('/users/:id', updateUser);


module.exports = {router};