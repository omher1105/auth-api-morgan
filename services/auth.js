const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../app.config');

const models = require('../models');
const Users = models.user;

const authenticate = params => {

    return Users.findOne({
        where: {
            email: params.email
        },
        raw: true
    }).then(user => {
        if (!user)
            throw new Error('USER_NOT_FOUND');
        /** Add password hash check **/
        if (params.password !== user.password)
            throw new Error('INVALID_PASSWORD');
        const payload = {
            email: user.email,
            id: user.id,
            time: new Date()
        };
	    return jwt.sign(payload, config.jwtSecret, {
            expiresIn: config.tokenExpireTime
        });
    });
};

module.exports = {
    authenticate
};