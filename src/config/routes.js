const {Router} = require('express');
const { getBreakfastMeals, getLunchMeals, getDinnerMeals, getBreakfastMealById, getLunchMealById, getDinnerMealById } = require('../controllers/mealController');

const router = Router();

router.get('/breakfast', getBreakfastMeals);
router.get('/lunch', getLunchMeals);
router.get('/dinner', getDinnerMeals);

router.get('/breakfast/:id', getBreakfastMealById);
router.get('/lunch/:id', getLunchMealById);
router.get('/dinner/:id', getDinnerMealById);


module.exports = {router};