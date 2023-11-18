var Sequelize = require('sequelize');
var db = require('./database');

var Products = require('./Product')
var Purchases = require('./Purchase')

var PurchaseProducts = db.define('purchaseproducts', {
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false, 
    },
    productId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false, 
        references: {
            model: Products,
            key: 'id'
        },
    },
    purchaseId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false, 
        references: {
            model: Purchases,
            key: 'id'
        },
    },

},
{
    timestamps: false,
});


PurchaseProducts.belongsTo(Purchases);
Purchases.hasMany(PurchaseProducts);

PurchaseProducts.belongsTo(Products);
Products.hasMany(PurchaseProducts);


module.exports = PurchaseProducts;