const getAll = (req, res) => {
  return res.status(200).json({
    message: 'ok controllers',
  });
};

module.exports = {
  getAll,
};
