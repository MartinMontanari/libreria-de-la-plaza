const express = require('express');
const articlesRouter = require('../routes/articles');

const app = express();

app.use(express.json());

app.use('/api', articlesRouter);

module.exports = app;