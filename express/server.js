'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const appRouter = require('./routes/app');

app.use(bodyParser.json());
app.use('/.netlify/functions/server', appRouter);  // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);
