const Users = require('../models/user').User;

const getUserByLogin = login => Users.findOne({where: {login}});


module.exports = {
    getUserByLogin,
};