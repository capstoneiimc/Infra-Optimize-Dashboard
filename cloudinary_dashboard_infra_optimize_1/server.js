
const express = require('express');
const axios = require('axios');
const app = express();
const path = require('path');
const PORT = 3000;

const cloudName = 'dersehypt';
const apiKey = '879823542223182';
const apiSecret = 'UkR4vpwF8dlyjnFJZP9cvC2HkWw';

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.use(express.static(__dirname));

app.get('/favicon.ico', (req, res) => res.sendFile(path.join(__dirname, 'favicon.ico')));

app.get('/infra', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/list-files', async (req, res) => {
    try {
        const auth = Buffer.from(`${apiKey}:${apiSecret}`).toString('base64');
        const response = await axios.get(`https://api.cloudinary.com/v1_1/${cloudName}/resources/raw`, {
            headers: {
                Authorization: `Basic ${auth}`
            }
        });
        res.json(response.data.resources);
    } catch (error) {
        console.error('Error fetching raw files:', error.message);
        res.status(500).json({ error: 'Error fetching raw files.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
