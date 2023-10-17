const tasksModel = require('../models/tasks.models');

const getAll = async (_req, res) => {
  const tasks = await tasksModel.getAll();
  return res.status(200).json(tasks);
};

const createTask = async (req, res) => {
  return res.status(200).json(req.body);
};

module.exports = {
  getAll,
  createTask,
};
