const express = require('express');
const { addResult } = require('../controllers/resultController');

const router = express.Router();

router.post('/', addResult);

module.exports = router;