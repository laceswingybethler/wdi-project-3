require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
mongoose.plugin(require('mongoose-unique-validator'))
const bodyParser = require('body-parser')
const routes = require('./config/routes')
const errorHandling = require('./lib/errorHandling')

const app = express()

mongoose.connect(process.env.MONGODB_URI)

app.use(bodyParser.json())
app.use('/api', routes)

app.use(errorHandling)

app.listen(process.env.PORT, () => console.log(`Express is running on Port ${process.env.PORT}`))
