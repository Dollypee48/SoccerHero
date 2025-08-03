const express = require('express');
const router = express.Router();
const { getFootballNews } = require('../controllers/newsController');

router.get('/news', getFootballNews);

module.exports = router;
