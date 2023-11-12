const { Sequelize } = require('sequelize');

const db = new Sequelize('database', 'user', 'pass', {
  dialect: 'sqlite',
  host: './db.sqlite'
})

module.exports = db;