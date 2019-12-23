module.exports = function (role) {
    return function (req, res, next) {
        const { position } = req.authInfo
        if (role.includes(position)) {
            next()
        } else {
            return res.sendStatus(401)
        }
    }
}