var Products = require('../models/Product');
var Users = require('../models/User');

var db = require('../models/database');


const controllers = {}
db.sync()

/* LIST ---------------------- */
controllers.list = async (req, res) => {
    const data = await Products.findAll({
        include: [
            {
                model: Users,
                attributes: { exclude: ['password'] }
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
        const { name, price, userId } = req.body;
        // Assuming you are storing the file path in the database
        // const imagePath = req.file ? req.file.path : null;

        // Check if required fields are present
        if (!name || !price || !userId) {
            return res.status(400).json({ success: false, error: 'Name, price, and userId are required fields.' });
        }

        const data = await Products.create({
            name: name,
            price: price,
            userId: userId,
            // imagePath: imagePath, // Store the file path or URL in the database
        });

        res.json({ success: true, data: data });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Error creating the product!' });
    }
};

/* UPDATE ---------------------- */
controllers.update = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(req.body);
        const { name, price, userId } = req.body;

        if (id || !name || !price || !userId) {
            return res.status(400).json({ success: false, error: 'Name, price, and userId are required fields.' });
        }

        const [updatedRowsCount, updatedRows] = await Products.update(
            {name: name,  price: price, userId: userId },
            { where: { id: id }, returning: true }
        );

        if (updatedRowsCount === 0) {
            return res.status(404).json({ success: false, error: 'Product not found.' });
        }

        res.json({ success: true, data: updatedRows });
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ success: false, error: 'Internal server error.' });
    }
};

/* DELETE ---------------------- */
controllers.delete = async (req, res) => {
    try {
        const { id } = req.params;

        // Check if the ID is provided
        if (!id) {
            return res.status(400).json({ success: false, error: 'Product ID is required.' });
        }

        // Find the product by ID and delete it
        const deletedProduct = await Products.destroy({
            where: { id: id },
        });

        // Check if the product was found and deleted
        if (!deletedProduct) {
            return res.status(404).json({ success: false, error: 'Product not found.' });
        }

        res.json({ success: true, data: deletedProduct });
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ success: false, error: 'Internal server error.' });
    }
};

module.exports = controllers;