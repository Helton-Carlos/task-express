const express = require('express');
const taskController = require('./controllers/tasks.controllers');

const router = express.Router();

router.post('/tasks', taskController.createTask);

module.exports = router;
