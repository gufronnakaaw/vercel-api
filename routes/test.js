import express from 'express';

const router = express.Router();

router.get('/quran', (req, res) => {
    res.json({
        success: true,
        message: 'this endpoint for quran',
    });
});

export default router;
