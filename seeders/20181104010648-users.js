'use strict';
const uuidv4 = require("uuid/v4");
const bcrypt = require("bcrypt");

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [
            {
	            id: uuidv4(),
                email: "user@mail.com",
	            password: bcrypt.hashSync("password", 10),
                firstName: "User",
                lastName: "User",
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ], {});
    },
	down: queryInterface => queryInterface.bulkDelete("Users", null, {}),
};
