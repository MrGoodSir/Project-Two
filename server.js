const express = require('express')
const app = express();
const mongoose = require('mongoose')
const armorRouter = require('./controllers/armors')
const startRouter = require('./controllers/start')
const weaponRouter = require('./controllers/weapons')
const equipmentRouter = require('./controllers/equipment')
require('dotenv').config()




const DATABASE_URL = process.env.DATABASE_URL

mongoose.connect(DATABASE_URL)
const db = mongoose.connection


db.on('connected', () => { console.log("MongoDB is Connected...") })
db.on('error', (error) => console.log('MongoDB Error ' + error.message));

app.use('/weapons', weaponRouter)
app.use('/armor', armorRouter)
app.use('/equipment', equipmentRouter)
app.use(startRouter)








const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Express is listening on port: ${PORT}`)
})