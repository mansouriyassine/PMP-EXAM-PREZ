const Result = require('../models/resultModel');

const addResult = async (req, res) => {
  const result = new Result(req.body);
  try {
    const newResult = await result.save();
    res.status(201).json(newResult);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  addResult
};