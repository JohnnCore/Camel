var Users = require('../models/User');
var db = require('../models/database');
var md5 = require('md5')

const controllers = {}
db.sync()

/* LIST ---------------------- */
controllers.list = async (req, res) => {
    const data = await Users.findAll({
        attributes: { exclude: ['password'] }
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
        const data = await Users.create({
            username: 'co',
            password: md5('ak"k,.m23@asd,l')
        })
        res.json({ success: true, data: data });
    }catch{
        res.status(400).json({ success: false, error: 'Error creating the user!' });
    }
}


module.exports = controllers;