let passport = require('passport')
let passportJWT = require('passport-jwt')
let config = require('../config.json')
const db = require('../models')

const ExtractJwt = passportJWT.ExtractJwt
const jwtOption = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.scretKey
}

const JwtStrategy = passportJWT.Strategy
const howToAuth = new JwtStrategy(jwtOption, async function (payload, done) {
    done(null, true, payload)
})

passport.use(howToAuth)
module.exports = passport.authenticate("jwt", { session: false })

