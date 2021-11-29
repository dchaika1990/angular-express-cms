const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes');
const app = express();

app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require('cors')());
app.use('/api', router);

module.exports = app;
