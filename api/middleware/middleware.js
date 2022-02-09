function logger(req, res, next) {
    console.log(`[${req.method}] ${req.url} ${new Date()}`)
    next()
}

function validateUserId(req, res, next) {
  // DO YOUR MAGIC
}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
}

module.exports = {
    logger,
    validateUserId,
    validateUser,
    validatePost
}