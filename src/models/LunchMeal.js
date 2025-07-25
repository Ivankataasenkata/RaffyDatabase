const mongoose = require('mongoose');
const { Schema } = mongoose;

const lunchShema = new Schema({
    titleName: { type: String, required: true },
    img: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },           // Includes currency for clarity
    timeToPrepare: { type: String, required: true },   // Format like '10 mins'
    alergines: { type: String, required: true },       // Comma-separated list of allergens
});

const Lunch = mongoose.model('Lunch', lunchShema);

module.exports = { Lunch };