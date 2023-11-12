var Sequelize = require('sequelize');
var db = require('./database');

var Users = require('./User')

var Products = db.define('products', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false, 
    },
    price: {
        type: Sequelize.NUMBER,
        allowNull: false, 
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false, 
        references: {
            model: Users,
            key: 'id'
        },
    }
},
{
    timestamps: false,
});

Products.belongsTo(Users);

module.exports = Products;