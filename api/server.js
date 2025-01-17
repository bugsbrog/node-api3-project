const express = require('express');
const usersRouter = require('./users/users-router')
const { logger } = require('./middleware/middleware')

const server = express();

server.use(express.json())

server.use(logger)

server.use('/api/users', usersRouter)

server.get('/', logger, (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

server.use((err, req, res, next) => {
  console.log('You done messed up!')
    res.status(err.status || 500).json({
      myMessage: 'There is an oopsie in the users router',
      message: err.message,
      stack: err.stack
  })
})

module.exports = server;
