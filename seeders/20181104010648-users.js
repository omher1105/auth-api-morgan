'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('users', [
            {
                email: "lucho.farfan9@gmail.com",
                password: "luis123",
                first_name: "Luis Eduardo",
                last_name: "Farfan",
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkDelete('Person', null, {});
        */
    }
};
