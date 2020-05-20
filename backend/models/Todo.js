const mongoose = require('mongoose')

const TodoSchema = mongoose.Schema({
  title: String,
  completed: String
})

module.exports = mongoose.model('Todo', TodoSchema)
