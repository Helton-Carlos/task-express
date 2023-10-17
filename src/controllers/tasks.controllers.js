const tasksSchema = require('../models/connection.models');

const createTask = async (req, res) => {
  const tasks = req.body;
  const newTasks = await tasksSchema.create(tasks);

  return res.status(200).json(newTasks);
};

module.exports = {
  createTask,
};
