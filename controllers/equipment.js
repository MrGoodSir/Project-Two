const express = require('express');
const app = express();
const equipmentRouter = express.Router();
const equipmentSeed = require('../models/Seeds/equipmentSeed')
const Equipment = require('../models/equipment');

app.use(express.static("public"));

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
equipmentRouter.put('/:id', (req, res) => {
    Equipment.findByIdAndUpdate(
        req.params.id,
        req.body, {
            new: true,
        },
        (err, updatedEquipment) => {
            res.redirect(`/home/equipment/${req.params.id}`)
        }
    )
})

// Buy Button Route
equipmentRouter.put('/:id/buy', (req, res) => {
    Equipment.findByIdAndUpdate(
        req.params.id, { $inc: { quanity: -1 } }, {
            new: true,
        },
        (error, updatedEquipments) => {
            res.redirect(`/home/equipment/${req.params.id}`)
        })
})


// Create Route

equipmentRouter.post('/', (req, res) => {
    Equipment.create(req.body, (error, equipment) => {
        res.redirect('/home/equipment')
    })
})

// Edit Route

equipmentRouter.get('/:id/edit', (req, res) => {
    Equipment.findById(req.params.id, (err, foundEquipment) => {
        res.render('../views/equipment/edit.ejs', {
            equipment: foundEquipment
        })
    })
})

// Show route

equipmentRouter.get('/:id', (req, res) => {
    Equipment.findById(req.params.id, (error, equipment) => {
        res.render('../views/equipment/show.ejs', {
            equipment
        })
    })
})








module.exports = equipmentRouter