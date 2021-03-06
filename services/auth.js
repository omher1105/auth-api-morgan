const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../app.config');
const uuidv4 = require("uuid/v4");


const models = require('../models');
const Users = models.User;

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
        if (!bcrypt.compareSync(params.password, user.password))
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

const createUser = params => {
    return Users.create({
        id: uuidv4(),
        email: params.email,
        password: bcrypt.hashSync(params.password, config.saltRounds),
        firstName: params.firstName,
        lastName: params.lastName,
        createdAt: new Date(),
        updateAt: new Date
    })
        .then(json => console.log(json))
        .catch(error => console.log(error));
};

module.exports = {
    authenticate,
    createUser
};