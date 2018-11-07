'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
	    id: {
		    type: DataTypes.UUID,
		    primaryKey: true,
		    defaultValue: DataTypes.UUIDV4,
	    },
	    email: DataTypes.STRING,
        password: DataTypes.STRING,
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }, {});
    User.associate = function (models) {
        // associations can be defined here
    };
    return User;
};