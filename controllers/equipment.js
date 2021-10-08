const express = require('express');
const equipmentRouter = express.Router();
const equipmentSeed = require('../models/Seeds/equipmentSeed')
const Equipment = require('../models/equipment');

// Seed Route

equipmentRouter.get('/seed', (req, res) => {
    Equipment.deleteMany({}, (error, allEquipment) => {})

    Equipment.create(equipmentSeed, (error, data) => {
        res.redirect('/home/equipment')
    })
})



// Index Route

equipmentRouter.get('/', (req, res) => {
    Equipment.find({}, (error, allEquipment) => {
        res.render('../views/equipment/index.ejs', {
            equipments: allEquipment
        })
    })
})


// New Route

// Delete Route

// Update route

// Create Route

// Edit Route

// Show route

equipmentRouter.get('/show/:id', (req, res) => {
    Equipment.findById(req.params.id, (error, equipment) => {
        res.render('../views/equipment/show.ejs', {
            equipment
        })
    })
})








module.exports = equipmentRouter