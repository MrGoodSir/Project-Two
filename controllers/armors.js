const express = require('express')
const armorRouter = express.Router();
const armorSeed = require('../models/Seeds/armorSeed')
const Armor = require('../models/armor')

// Seed Route

armorRouter.get('/seed', (req, res) => {
    Armor.deleteMany({}, (error, allArmors) => {})

    Armor.create(armorSeed, (error, data) => {
        res.redirect('/home/armor')
    })
})

// Index Route

armorRouter.get('/', (req, res) => {
    Armor.find({}, (error, allArmors) => {
        res.render('../views/armors/index.ejs', {
            armors: allArmors
        })
    })
})

// New Route

// Delete Route

// Update route

// Create Route

// Edit Route

// Show route

armorRouter.get('/show/:id', (req, res) => {
    Armor.findById(req.params.id, (error, armor) => {
        res.render('../views/armors/show.ejs', {
            armor
        })

    })
})














module.exports = armorRouter