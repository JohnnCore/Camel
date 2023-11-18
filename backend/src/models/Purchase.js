var Sequelize = require('sequelize');
var db = require('./database');

var Users = require('./User')

var Purchases = db.define('purchases', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false, 
    },
    total: {
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


Purchases.belongsTo(Users);
Users.hasMany(Purchases);



module.exports = Purchases;