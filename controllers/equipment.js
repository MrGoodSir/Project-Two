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

equipmentRouter.get('/new', (req, res) => {
    res.render('../views/equipment/new.ejs')
})

// Delete Route

equipmentRouter.delete('/:id', (req, res) => {
    Equipment.findByIdAndRemove(req.params.id, (err) => {
        res.redirect('/home/equipment')
    })
})

// Update route

// Create Route

// Edit Route

// Show route

equipmentRouter.get('/:id', (req, res) => {
    Equipment.findById(req.params.id, (error, equipment) => {
        res.render('../views/equipment/show.ejs', {
            equipment
        })
    })
})








module.exports = equipmentRouter