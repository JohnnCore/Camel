var Comments = require('../models/Comment');
var Users = require('../models/User');
var Products = require('../models/Product');

var db = require('../models/database');


const controllers = {}
db.sync()

/* LIST ---------------------- */
controllers.list = async (req, res) => {
    const data = await Comments.findAll()
        .then(function (data) {
            return data;
        })
        .catch(error => {
            return error;
        });
    res.json({ success: true, data: data });
}

/* LIST FROM PRODUCT---------------------- */
controllers.product_list = async (req, res) => {
    const {id} = req.params;
    const data = await Comments.findAll({
        include: [
            {model: Products, 
                where: {
                    id: id,
                }},
                
            {model: Users},
        ],
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
    const data = await Comments.findOne({
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

    const {id, comment} = req.body;
    try {

        const data = await Comments.create({
            comment: comment,
            productId: id,
            userId: 1,
        });
        res.json({ success: true, data: data });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, error: 'Error creating the product!' });
    }
}


module.exports = controllers;