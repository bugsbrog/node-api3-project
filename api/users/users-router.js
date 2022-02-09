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

router.post('/', logger, validateUser, async (req, res, next) => {
    const { name } = req.body
        try {
            const createUser = await Users.insert({ name })
            res.status(201).json(createUser)
        } catch (err) {
            next(err)
        }
});

router.put('/:id', logger, validateUserId, validateUser, async (req, res, next) => {
    const { id } = req.params
    const { name } = req.body
        try {
            const updateUser = await Users.update(id, { name })
            res.json(updateUser)
        } catch (err) {
            next(err)
        }
});

router.delete('/:id', logger, validateUserId, async (req, res, next) => {
    const { id } = req.params
        try {
           await Users.remove(id)
            res.json(req.user)
        } catch (err) {
            next(err)
        }
});

router.get('/:id/posts', logger, validateUserId, async (req, res, next) => {
    const { id } = req.params
        try {
            // Why can't we use res.json(req.user)?
            // I think we can't use res.json(req.user) because it only returns the user
            const getId = await Users.getUserPosts(id)
            res.json(getId)
        } catch (err) {
            next(err)
        }
});

router.post(
    '/:id/posts',
    logger,
    validateUserId,
    validatePost,
    async (req, res, next) => {
    const { id } = req.params
    const { text } = req.body
        try {
            const createPost = await Posts.insert({
                user_id: id,
                // Why can't we just do text instead of text: text?
                text: text
            })
            res.status(201).json(createPost)
        } catch (err) {
            next(err)
        }
});

module.exports = router