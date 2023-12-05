var Purchases = require('../models/Purchase');
var PurchaseProducts = require('../models/PurchaseProduct');
var Users = require('../models/User');
var Products = require('../models/Product');

var db = require('../models/database');


const controllers = {}
db.sync()

/* LIST ---------------------- */
controllers.list = async (req, res) => {
    const data = await Purchases.findAll({
        include: [
            {
                model: Users,
                attributes: { exclude: ['password'] },
            },
        ]
    })
        .then(function (data) {
            return data;
        })
        .catch(error => {
            return error;
        });
    res.json({ success: true, data: data });
}

/* LIST FROM USER---------------------- */
controllers.user_list = async (req, res) => {
    const { userId } = req.params;
    const data = await Purchases.findAll({
        where: { userId: userId },
        include: [
            {
                model: PurchaseProducts,
                include: [
                    { model: Products },
                ]
            },
        ]
    })
        .then(function (data) {
            return data;
        })
        .catch(error => {
            return error;
        });
    res.json({ success: true, data: data });
}

/* GET ---------------------- */
controllers.get = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    const data = await Purchases.findOne({
        where: { id: id },
        include: [
            {
                model: Users,
            },
            {
                model: PurchaseProducts,
                include: [
                    { model: Products },
                ]
            },
        ]
    })
        .then(function (data) {
            return data;
        })
        .catch(error => {
            return error;
        });
    res.json({ success: true, data: data });
}

/* CREATE ---------------------- */
controllers.create = async (req, res) => {
    try {
        const { total, userId, cart } = req.body;

        const newPurchase = await Purchases.create({
            date: Date.now(),
            total: total,
            userId: userId,
        });

        for (const product of cart) {
            await PurchaseProducts.create({
                quantity: product.quantity,
                productId: product.id,
                purchaseId: newPurchase.id,
            });
        }

        res.json({ success: true, data: newPurchase });
    } catch (error) {
        res.status(400).json({ success: false, error: 'Error creating the purchase!' });
    }
}


module.exports = controllers;