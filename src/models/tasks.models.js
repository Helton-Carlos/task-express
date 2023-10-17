const connection = require('./connection.models');

const getAll = async () => {
  const tasks = await connection.execute('SELECT * FROM tasks');
  return tasks;
};

const createTask = async (task) => {
  const { title } = task;
  const date = new Date(Date.now()).toUTCString();

  const query = 'INSERT INTO tasks(title, status, create_at) VALUES (?,?,?)';

  const createTask = await connection.execute(query, [title, 'pendente', date]);
};
module.exports = {
  getAll,
};
