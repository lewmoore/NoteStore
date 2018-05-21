let mongoose = require('mongoose')
let Schema = mongoose.Schema

let NoteSchema = new Schema({
  text: { type: String, require: true }
})

module.exports = mongoose.model('Note', NoteSchema)
