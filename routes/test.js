const express = require('express');
const data = require('../data/test.json');

const router = express.Router();

router.get('/quran', (req, res) => {
    res.json({
        success: true,
        message: 'this endpoint for quran',
    });
});

router.get('/test', (req, res) => {
    res.json({ data });
});

module.exports = router;
