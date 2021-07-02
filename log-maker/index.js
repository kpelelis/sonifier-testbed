const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const http = require('http');

const MAX_DELAY = 1000;
const PORT = 5140;
const FILE_NAME = '/var/log/sonifier-demo.log'
const MAX_REQUESTS = 100;

var app = express();

var accessLogStream = fs.createWriteStream(
  FILE_NAME,
  {
    flags: 'a',
  }
);

app.use(morgan(
  ':method :url time=:response-time ms',
  {
    stream: accessLogStream
  }
))

app.get('/', function (_, res) {
  const delay = Math.random() * MAX_DELAY;
  setTimeout(() => {
    res.send('ok!')
  }, delay);
})

app.listen(PORT)

function sleep(ms) {
  return new Promise(res => setTimeout(res, ms));
}

(async function() {
  for (let i = 0; i < MAX_REQUESTS; i++) {
    const req = http.request({ port: PORT });
    req.end();
    await sleep(200);
  }
})();

