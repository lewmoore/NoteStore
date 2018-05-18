const express = require('express')
const app = express()
let mongoose = require('mongoose')
let Applicant = require('./app/model/note')
mongoose.connect("mongodb://localhost:27017/notes")

let router = express.Router();

let port = process.env.PORT || 8080;
app.listen(port)
console.log("You're on localhost " + port);

module.exports = app
