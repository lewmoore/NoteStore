const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
let mongoose = require('mongoose')
let Note = require('./app/model/note')
let note = require('./app/routes/note')
mongoose.connect("mongodb://localhost:27017/notes")

let router = express.Router();

app.route('/notes')
  .post(note.postNote)
  .get(note.getNotes)

app.route('/notes/:id')
  .get(note.getNoteById)


let port = process.env.PORT || 8080;
app.listen(port)
console.log("You're on localhost " + port);

module.exports = app
