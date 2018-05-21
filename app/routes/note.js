let mongoose = require('mongoose')
let Note = require('../model/note')

function postNote(req, res) {
  let newNote = new Note(req.body)
  newNote.save(function(err, note) {
    if (err) {
      res.send(err)
    } else {
      res.json ({ message: "Note added successfully", note })
    }

  })
}

function getNotes(req, res){
  Note.find({}).exec(function(err, notes){
    if (err) res.send(err)
    res.json(notes)
  })
}

module.exports = { postNote, getNotes }
