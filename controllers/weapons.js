const express = require('express');
const app = express();
const weaponRouter = express.Router();
const weaponSeed = require('../models/Seeds/weaponSeed')
const Weapon = require('../models/weapon');

app.use(express.static("public"));

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
    Weapon.findByIdAndRemove(req.params.id, (err) => {
        res.redirect('/home/weapons')
    })
})

// Update route

weaponRouter.put('/:id', (req, res) => {
    Weapon.findByIdAndUpdate(
        req.params.id,
        req.body, {
            new: true,
        },
        (err, updatedweapon) => {
            res.redirect(`/home/weapons/${req.params.id}`)
        }
    )
})

weaponRouter.put('/:id/buy', (req, res) => {
    Weapon.findByIdAndUpdate(
        req.params.id, { $inc: { quanity: -1 } }, {
            new: true,
        },
        (error, updatedWeapons) => {
            res.redirect(`/home/weapons/${req.params.id}`)
        })
})

// Create Route

weaponRouter.post('/', (req, res) => {
    Weapon.create(req.body, (error, weapon) => {
        res.redirect('/home/weapons')
    })
})

// Edit Route

weaponRouter.get('/:id/edit', (req, res) => {
    Weapon.findById(req.params.id, (error, foundWeapon) => {
        res.render('../views/weapons/edit.ejs', {
            weapon: foundWeapon
        })
    })
})

// Show route

weaponRouter.get('/:id', (req, res) => {
    Weapon.findById(req.params.id, (error, weapon) => {
        res.render('../views/weapons/show.ejs', {
            weapon
        })
    })
})









module.exports = weaponRouter