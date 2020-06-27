#!/usr/bin/env node

const opener = require('opener');
const handler = require('serve-handler');
const http = require('http');
const [,, port = 5000, url = 'index.html'] = process.argv;
const cwd = process.cwd();

console.log(cwd)
 
http.createServer((request, response) => handler(request, response)).listen(port);
 
opener("http://localhost:" + port + '/' + url);