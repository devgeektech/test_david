var express = require('express');
var http = require('http');
var config = require('./settings/config');

var app = express();

require('./settings/express').configure(app);
require('./settings/routes').configure(app);


var server = http.createServer(app);
var port = process.env.PORT || config.webServer.port || 3000;
server.listen(port, function() {
    console.log('express running ....');
});


exports.module = exports = app;