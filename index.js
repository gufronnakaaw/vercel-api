import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000 || 5000 || 8080;

app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'vercel API success',
    });
});

app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
});
