const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');


const models = require('../models');

const config = require('../app.config');

const Users = models.user;

const authenticate = params => {

    return Users.findOne({
        where: {
            email: params.email
        },
        raw: true
    }).then(user => {
        if (!user)
            throw new Error('Usuario no existe!');
        if (params.password !== user.password)
            throw new Error('Contraseña erronea');
        const payload = {
            email: user.email,
            id: user.id,
            time: new Date()
        };
        const token = jwt.sign(payload, config.jwtSecret, {
            expiresIn: config.tokenExpireTime
        });
        return token;
    });
};

module.exports = {
    authenticate
};