const express      = require('express');
const logger       = require('morgan');
const bodyParser   = require('body-parser');
const passport      = require('passport');
const pe            = require('parse-error');
const cors          = require('cors');

const v1    = require('./routes/v1');
const app   = express();

const CONFIG = require('./config/config');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Passport
// https://codeburst.io/build-a-rest-api-for-node-mysql-2018-jwt-6957bcfc7ac9
app.use(passport.initialize());