var Sequelize = require('sequelize');
var db = require('./database');

var Users = require('./User')
var Products = require('./Product')

var Comments = db.define('comments', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    comment: {
        type: Sequelize.STRING,
        allowNull: false, 
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false, 
        references: {
            model: Users,
            key: 'id'
        },
    },
    productId: {
        type: Sequelize.INTEGER,
        allowNull: false, 
        references: {
            model: Products,
            key: 'id'
        },
    }
},
{
    timestamps: false,
});

Comments.belongsTo(Users);
Users.hasMany(Comments);

Comments.belongsTo(Products);
Products.hasMany(Comments);

module.exports = Comments;