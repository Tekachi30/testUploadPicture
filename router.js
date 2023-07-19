//router.js
const express = require('express');
const app = express();
const path = require('path');

const{ uploadImage } = require('./controller');
const router = express.Router();
const upload = require('./uploadMiddleware');
const Resize = require('./root/Resize');

router.get('/', async function (req, res) {
    await res.render('index');
});

router.post('/post', upload.single('image'), uploadImage);

module.exports = router;
