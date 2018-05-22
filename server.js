const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.set("view engine", "ejs")
app.set("views", "views")
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
let mongoose = require('mongoose')
let Note = require('./app/model/note')
let note = require('./app/routes/note')
mongoose.connect("mongodb://localhost:27017/notes")

let router = express.Router();

app.get('/', function(req, res){
  res.render('index')
})

app.route('/notes')
  .post(note.postNote)
  .get(note.getNotes)

app.route('/notes/:id')
  .get(note.getNoteById)
  .delete(note.deleteNote)


let port = process.env.PORT || 8080;
app.listen(port)
console.log("You're on localhost " + port);

module.exports = app
