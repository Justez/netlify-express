'use strict';
const express = require('express');
const serverless = require('serverless-http');
const helmet = require('helmet');
const app = express();
const bodyParser = require('body-parser');
const appRouter = require('./routes/app');
const sessionsRouter = require('./routes/sessions');
const devicesRouter = require('./routes/devices');
const accountsRouter = require('./routes/accounts');

require('dotenv').config();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/.netlify/functions/server', appRouter);
app.use('/.netlify/functions/server/api/accounts', accountsRouter);
app.use('/.netlify/functions/server/api/sessions', sessionsRouter);
app.use('/.netlify/functions/server/api/devices', devicesRouter);

module.exports = app;
module.exports.handler = serverless(app);
