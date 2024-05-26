const express = require('express');
const { generateShortURL, handleGetAnalytics } = require("../controllers/url")


const router = express.Router();

router.post('/', generateShortURL);

router.get('/analytics/:shortID', handleGetAnalytics);

module.exports = router;