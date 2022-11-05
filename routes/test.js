import express from 'express';
import fs from 'fs';

const router = express.Router();

router.get('/quran', (req, res) => {
    res.json({
        success: true,
        message: 'this endpoint for quran',
    });
});

router.get('/test', (req, res) => {
    const data = JSON.parse(fs.readFileSync('./data/test.json'));
    res.json({ data });
});

export default router;
