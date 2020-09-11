'use strict';
var path = require('path');
var express = require('express');
var app = express();
const bodyParcer = require("body-parser");
const volleyball = require("volleyball")
const routes = require('../routes')

// Pass our express application pipeline into the configuration
// function located at server/app/configure/index.js

// require('./configure')(app);

// Routes that will be accessed via AJAX should be prepended with
// /api so they are isolated from our GET /* wildcard.
app.use(volleyball)
app.use("/", express.static(path.join(__dirname, "/public")))

app.use(bodyParcer.urlencoded({ extended: true }))
app.use(bodyParcer.json())
app.use('/api', routes);


// Error catching endware.

app.use(function (err, res, next) {
    console.error(err, typeof next);
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.');
});
 

module.exports = app;
