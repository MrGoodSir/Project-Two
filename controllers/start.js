const express = require('express')
const startRouter = express.Router();


startRouter.get('/', (req, res) => {
    res.render('../views/start.ejs')
})














module.exports = startRouter