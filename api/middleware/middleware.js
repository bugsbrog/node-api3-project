const User = require('/api/users/users-model')

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
    try {

    } catch (err) {
        next(err)
    }
}

async function validatePost(req, res, next) {
    try {

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