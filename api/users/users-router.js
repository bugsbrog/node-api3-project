const express = require('express');
const {
    logger,
    validateUserId,
    validateUser,
    validatePost
} = require('../middleware/middleware')
const Users = require('./users-model')
const Posts = require('../posts/posts-model')

const router = express.Router();

router.get('/', logger, async (req, res, next) => {
    try {
        const user = await Users.get()
        res.json(user)
    } catch (err) {
        next(err)
    }
});

router.get('/:id', logger, validateUserId, async (req, res, next) => {
    // since we added req.user = user in mw, we can just do this
    res.json(req.user)
});

router.post('/', logger, async (req, res, next) => {
    try {

    } catch (err) {
        next(err)
    }
  // RETURN THE NEWLY CREATED USER OBJECT
  // this needs a middleware to check that the request body is valid
});

router.put('/:id', logger, async (req, res, next) => {
    try {

    } catch (err) {
        next(err)
    }
  // RETURN THE FRESHLY UPDATED USER OBJECT
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
});

router.delete('/:id,', logger, async (req, res, next) => {
    try {

    } catch (err) {
        next(err)
    }
  // RETURN THE FRESHLY DELETED USER OBJECT
  // this needs a middleware to verify user id
});

router.get('/:id/posts', logger, async (req, res, next) => {
    try {

    } catch (err) {
        next(err)
    }
  // RETURN THE ARRAY OF USER POSTS
  // this needs a middleware to verify user id,ext
});

router.post('/:id/posts',logger, async (req, res, next) => {
    try {

    } catch (err) {
        next(err)
    }
  // RETURN THE NEWLY CREATED USER POST
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
});

module.exports = router