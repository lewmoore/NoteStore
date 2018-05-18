let mongoose = require('mongoose')
let Note = require('../model/note')

function postNote(req, res) {
  let newNote = new Note(req.body)
  console.log(newNote, "NEW NOTE")
  newNote.save(function(err, note) {
    if (err) {
      res.send(err)
    } else {
      res.json ({ message: "Note added successfully", note })
    }

  })
}

module.exports = { postNote }
