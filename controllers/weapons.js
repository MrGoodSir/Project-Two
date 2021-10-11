const express = require('express');
const weaponRouter = express.Router();
const weaponSeed = require('../models/Seeds/weaponSeed')
const Weapon = require('../models/weapon');



// Seed Route

weaponRouter.get('/seed', (req, res) => {
    Weapon.deleteMany({}, (error, allWeapons) => {})

    Weapon.create(weaponSeed, (error, data) => {
        res.redirect('/home/weapons')
    })
})



// Index Route

weaponRouter.get('/', (req, res) => {
    Weapon.find({}, (error, allWeapons) => {
        res.render('../views/weapons/index.ejs', {
            weapons: allWeapons
        })

    })
})



// New Route

weaponRouter.get('/new', (req, res) => {
    res.render('../views/weapons/new.ejs')
})

// Delete Route

weaponRouter.delete('/:id', (req, res) => {
    console.log("Hit")
    Weapon.findByIdAndRemove(req.params.id, (err) => {
        res.redirect('/home/weapons')
    })
})

// Update route

// Create Route

// Edit Route

// Show route

weaponRouter.get('/:id', (req, res) => {
    Weapon.findById(req.params.id, (error, weapon) => {
        res.render('../views/weapons/show.ejs', {
            weapon
        })
    })
})









module.exports = weaponRouter