const Purchases = require('../models/Purchase');
var PurchaseProducts = require('../models/PurchaseProduct');
var db = require('../models/database');


const controllers = {}
db.sync()

/* LIST ---------------------- */
controllers.list = async (req, res) => {
    const data = await PurchaseProducts.findAll()
        .then(function (data) {
            return data;
        })
        .catch(error => {
            return error;
        });
    res.json({ success: true, data: data });
}

/* LIST FROM PURCHASE---------------------- */
controllers.purchase_list = async (req, res) => {
    const {id} = req.params;

    const data = await PurchaseProducts.findAll({
        include:[
            {model: Purchases, 
                where: {id:id}
            }
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
    const data = await PurchaseProducts.findOne({
        where: { id: id },
        include: [

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
        const data = await PurchaseProducts.create({
            quantity: 29,
            productId: 1,
            purchaseId: 1,
        });
        res.json({ success: true, data: data });
    } catch (error) {
        res.status(400).json({ success: false, error: 'Error creating the purchase products!' });
    }
}


module.exports = controllers;