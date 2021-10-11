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

armorRouter.get('/new', (req, res) => {
    res.render('../views/armors/new.ejs')
})

// Delete Route

armorRouter.delete('/:id', (req, res) => {
    Armor.findByIdAndRemove(req.params.id, (err) => {
        res.redirect('/home/armor')
    })
})

// Update route


// Buy Button Route
// armorRouter.put('/:id/buy', (req, res) => {
//     Armor.findByIdAndUpdate(
//         req.params.id, { $inc: { quanity: -1 } }, {
//             new: true,
//         },
//         (error, updatedArmors) => {
//             res.redirect(`/armors/${req.params.id}`)
//         })
// })





// Create Route

armorRouter.post('/', (req, res) => {
    Armor.create(req.body, (error, armor) => {
        res.redirect('/home/armor')
    })
})

// Edit Route

// Show route

armorRouter.get('/:id', (req, res) => {
    Armor.findById(req.params.id, (error, armor) => {
        res.render('../views/armors/show.ejs', {
            armor
        })

    })
})














module.exports = armorRouter