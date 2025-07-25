const mongoose = require('mongoose');
require('../models/BreakfastMeal');

const connectionString ='mongodb://localhost:27017/raffy';

async function configDatabase() {
    await mongoose.connect(connectionString);

    console.log('Database connected');
}

module.exports = {configDatabase}