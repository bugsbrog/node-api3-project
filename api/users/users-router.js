const express = require('express');
const {
    logger,
    validateUserId,
    validateUser,
    validatePost
} = require('/api/middleware/middleware')
const Users = require('./users-model')
const Posts = require('../posts/posts-model')

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {

    } catch (err) {
        next(err)
    }
  // RETURN AN ARRAY WITH ALL THE USERS
});

router.get('/:id', async (req, res, next) => {
    try {

    } catch (err) {
        next(err)
    }
  // RETURN THE USER OBJECT
  // this needs a middleware to verify user id
});

router.post('/', async (req, res, next) => {
    try {

    } catch (err) {
        next(err)
    }
  // RETURN THE NEWLY CREATED USER OBJECT
  // this needs a middleware to check that the request body is valid
});

router.put('/:id', async (req, res, next) => {
    try {

    } catch (err) {
        next(err)
    }
  // RETURN THE FRESHLY UPDATED USER OBJECT
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
});

router.delete('/:id', async (req, res, next) => {
    try {

    } catch (err) {
        next(err)
    }
  // RETURN THE FRESHLY DELETED USER OBJECT
  // this needs a middleware to verify user id
});

router.get('/:id/posts', async (req, res, next) => {
    try {

    } catch (err) {
        next(err)
    }
  // RETURN THE ARRAY OF USER POSTS
  // this needs a middleware to verify user id,ext
});

router.post('/:id/posts', async (req, res, next) => {
    try {

    } catch (err) {
        next(err)
    }
  // RETURN THE NEWLY CREATED USER POST
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
});

module.exports = router