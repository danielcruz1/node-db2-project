const express = require('express');
// const knex = require('knex');

// const db = knex({
//     client: 'sqlite3',
//     connection: {
//         filename: './data/cars.db3'
//     },
//     useNullAsDefault: true
// });

const db = require('./data/db-config');

const router = express.Router();
router.use(express.json());

router.get('/', async (req, res) => {
    try {
        const allCars = await db('cars');
        res.json(allCars);
    } catch(err) {
        res.status(500).json({ message: 'Failed to retrieve car inventory list.' });
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const carById = await db('cars').where({ id });
        res.json(carById);
    } catch(err) {
        res.status(500).json({ message: 'Failed to retrieve the car you are looking for.' });
    }
});

router.post('/', async (req, res) => {
    const carData = req.body;
    try {
        const [id] = await db('cars').insert(carData);
        const newCarData = await db('cars').where({ id });
        res.status(201).json(newCarData);
    } catch(err) {
        res.status(500).json({ message: "Failed to store new car data." });
    }
});


module.exports = router;  