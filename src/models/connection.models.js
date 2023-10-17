const mongoose = require('mongoose');
const { Schema } = mongoose;

const tasksSchema = new Schema({
  title: { type: String, require: true },
  status: { type: String, require: true },
  createAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('tasks', tasksSchema);
