'use strict';
const uuidv4 = require("uuid/v4");
const bcrypt = require("bcrypt");
const config = require('../app.config');

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [
            {
                id: uuidv4(),
                email: "user@mail.com",
                password: bcrypt.hashSync("password", config.saltRounds),
                firstName: "User",
                lastName: "User",
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ], {});
    },
    down: queryInterface => queryInterface.bulkDelete("Users", null, {}),
};
