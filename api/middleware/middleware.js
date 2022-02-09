const User = require('../users/users-model')

function logger(req, res, next) {
    console.log(`[${req.method}] ${req.url} ${new Date()}`)
    next()
}

async function validateUserId(req, res, next) {
    const { id } = req.params
        try {
            const user = await User.getById(id)
                if (user) {
                    req.user = user
                    next()
                } else {
                    next({
                        status: 404,
                        message: 'user not found'
                    })
                }
            } catch (err) {
                next(err)
            }
}

async function validateUser(req, res, next) {
    const { name } = req.body
        try {
            if (!name) {
                next({
                    status: 400,
                    message: 'missing required name field'
                })
            } else {
                // what does this line do?
                req.name = name
                next()
            }
        } catch (err) {
            next(err)
        }
}

async function validatePost(req, res, next) {
    const { text } = req.body
        try {
            if (!text) {
                next({
                    status: 400,
                    message: 'missing required text field'
                })
            } else {
                req.text = text
                next()
            }
        } catch (err) {
            next(err)
        }
}

module.exports = {
    logger,
    validateUserId,
    validateUser,
    validatePost
}