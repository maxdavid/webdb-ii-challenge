const express = require('express');
const server = express();

const carsRouter = require('./routes/cars/carsRouter');

server.use(express.json());

const logger = (req, res, next) => {
  console.log(`${req.method} request made to ${req.url} at ${Date.now()}`);
  next();
};

server.use(logger);

server.get('/', (req, res) => {
  res.status(200).json('nice');
});

server.use('/api/cars', carsRouter);

module.exports = server;
