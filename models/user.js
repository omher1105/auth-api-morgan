'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
	    id: {
		    type: Sequelize.UUID,
		    primaryKey: true,
		    defaultValue: Sequelize.UUIDV4,
	    },
	    email: DataTypes.STRING,
        password: DataTypes.STRING,
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
    }, {});
    User.associate = function (models) {
        // associations can be defined here
    };
    return User;
};