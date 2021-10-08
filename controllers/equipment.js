const express = require('express')
const equipmentRouter = express.Router();


equipmentRouter.get('/', (req, res) => {
    res.send("This is the Equipment page")
})











module.exports = equipmentRouter