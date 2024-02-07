const Users = require('../models/User');
const db = require('../models/database');

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

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
    // const {username, password} = req.body;
    const username = "was"
    const password = "12345"

    try {
        const hash = await bcrypt.hash(password, 10);
        const data = await Users.create({
            username: username,
            password: hash,
        })
        res.json({ success: true, data: data });
    } catch {
        res.status(400).json({ success: false, error: 'Error creating the user!' });
    }
}

/* LOGIN ---------------------- */
controllers.login = async(req, res) => {
    const {username, password} = req.body;
    
    // const username = "was"
    // const password = "12345"

    const user = await Users.findOne({
        where:{username:username}
    })

    if (!user) {
        return res.status(400).json({ success: false, error: 'User not found!' });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        return res.status(400).json({ success: false, error: 'Invalid password!' });
    }

    const payload = {
        id: user.id,
        username: user.username
    };

    const token = jwt.sign(payload, "was", { expiresIn: '1h' });

    res.json({ success: true, user: user, token:token });
}


module.exports = controllers;