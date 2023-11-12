var Products = require('../models/Product');
var db = require('../models/database');


const controllers = {}
db.sync()

/* LIST ---------------------- */
controllers.list = async (req, res) => {
    const data = await Products.findAll()
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
    const data = await Products.findOne({
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
        const data = await Products.create({
            name: 'prod2',
            price: '6.6',
            userId: 1,
        });
        res.json({ success: true, data: data });
    } catch (error) {
        res.status(400).json({ success: false, error: 'Error creating the product!' });
    }
}


module.exports = controllers;