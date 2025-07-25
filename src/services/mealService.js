const {Breakfast} = require('../models/BreakfastMeal');
const { Dinner } = require('../models/DinnerMeal');
const { Lunch } = require('../models/LunchMeal');

async function getAllBreakfastMeals() {
    const meals = await Breakfast.find();
    return meals;
}

async function getAllLunchMeals() {
    const meals = await Lunch.find();
    return meals;
}

async function getAllDinnerMeals() {
    const meals = await Dinner.find();
    return meals;
}

async function getMealById(id) {
    return await Breakfast.findById(id);
}

async function getLunchById(id) {
    return await Lunch.findById(id);
}

async function getDinnerById(id) {
    return await Dinner.findById(id);
}

module.exports = {
    getAllBreakfastMeals,
    getAllLunchMeals,
    getAllDinnerMeals,
    getMealById,
    getLunchById,
    getDinnerById
}