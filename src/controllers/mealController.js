const { getAllBreakfastMeals, getAllLunchMeals, getAllDinnerMeals, getMealById, getLunchById, getDinnerById } = require("../services/mealService")

module.exports = {
    getBreakfastMeals: async (req, res) => {
        const meals = await getAllBreakfastMeals();

        return res.json(meals);
    },
    getLunchMeals: async (req, res) => {
        const meals = await getAllLunchMeals();

        return res.json(meals);
    },
    getDinnerMeals: async (req, res) => {
        const meals = await getAllDinnerMeals();

        return res.json(meals);
    },
    getBreakfastMealById: async (req, res) => {
        const {id} = req.params;
        const meal = await getMealById(id);
        return res.json(meal);
    },
    getLunchMealById: async (req, res) => {
        const {id} = req.params;
        const meal = await getLunchById(id);
        return res.json(meal);
    },
    getDinnerMealById: async (req, res) => {
        const {id} = req.params;
        const meal = await getDinnerById(id);
        return res.json(meal);
    }


}