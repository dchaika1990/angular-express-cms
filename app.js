const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./routes');
const { MONGO_URI } = require('./config/keys');
const app = express();

mongoose
	.connect(MONGO_URI)
	.then(() => {
		console.log('MongoDB connected.');
	})
	.catch((e) => {
		console.log(e);
	});

app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require('cors')());
app.use('/api', router);

module.exports = app;
