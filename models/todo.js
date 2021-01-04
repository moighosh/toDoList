const mongoose = require('mongoose');
const TodoSchema = mongoose.Schema({
  date:{
    type: String,
    required: true
  },
  title:{
    type: String,
    required: true
  },
  desc:{
    type: String,
    required: true
  }
});

const Todo = module.exports = mongoose.model('Todo', TodoSchema);
