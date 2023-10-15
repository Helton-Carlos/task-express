const connection = require('./connection.models');

const getAll = async () => {
  const tasks = await connection.execute('SELET * FROM tasks');
  return tasks;
};

module.exports = {
  getAll,
};
