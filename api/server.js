const express = require('express');
const usersRouter = require('./users/users-router')
const server = express();

server.use(express.json())

server.use('/api/users', usersRouter)

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

server.use((err, req, res, next) => {
  console.log('You done messed up!')
    res.status(err.status || 500).json({
      message: `THE HORROR: ${err.message}`
  })
})

module.exports = server;
