const Users = require('../models/User');


const passportJWT = require('passport-jwt');

let ExtractJwt = passportJWT.ExtractJwt;
let JwtStrategy = passportJWT.Strategy;

let jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'was'
};

let strategy = new JwtStrategy(jwtOptions, async function (jwt_payload, next) {
    // console.log(jwt_payload);
    let user = await Users.findOne(
        {
            where: { id:  jwt_payload.id}
        });
    console.log(user);
    if (user) {
        next(null, user);
    } else {
        next(null, false);
    }
});


module.exports = strategy;