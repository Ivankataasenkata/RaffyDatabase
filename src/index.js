const express = require('express');
const cors = require('cors');
const { router } = require('./config/routes');
const { configDatabase } = require('./config/database');
const { Breakfast } = require('./models/BreakfastMeal');
const { Lunch } = require('./models/LunchMeal');
const { Dinner } = require('./models/DinnerMeal');

const PORT = process.env.PORT || 3000;

async function start() {
    const app = express();

    await configDatabase();
    app.use(cors({ origin: 'http://localhost:4200', credentials: true }));
    app.use(router);

    
    // await Dinner.create({
    //     titleName: 'Double Smash Burger',
    //     img: 'https://th.bing.com/th/id/OIP.FCKX4wQOl2H8D6e6Jr0sRwHaEK?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3',
    //     description: 'Two juicy beef patties, cheddar cheese, and burger sauce.',
    //     price: '12.90 BGN',
    //     timeToPrepare: '20 mins',
    //     alergines: 'Dairy, Gluten'
    // })

    app.listen(PORT, () => {
        console.log(`Application is running on port ${PORT}`);
    });
}

start();
