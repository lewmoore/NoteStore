let mongoose = require('mongoose')
let Schema = mongoose.Schema

let NoteSchema = new Schema({
  note: { type: String, require: true }
})

module.exports = mongoose.model('Note', NoteSchema)
