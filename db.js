const config = require('./config');

const Sequelize = require('sequelize');

const db = config.db_credentials;

var sequelize = new Sequelize(db.database, db.username, db.password, db);

require('sequelize-values')(sequelize);

module.exports = sequelize;