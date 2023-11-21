const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController')

const multer = require('multer');
const path = require('path');


const getDestination = (req, file, cb) => {
    let folder = ".//Products_Upload";

    cb(null, folder);
}

const storage = multer.diskStorage({
    destination: getDestination,
    filename: function (req, file, cb) {
        const crypto = require('crypto');
        const hash = crypto.randomBytes(6).toString('hex');
        const extensao = path.extname(file.originalname);
        cb(null, hash + '-' + Date.now() + extensao);
    }
});

const upload = multer({ storage: storage });

router.get('/', productsController.list);
router.post('/create', upload.single('imagem'), productsController.create);
router.get('/:id', productsController.get);
router.put('/:id/edit', upload.single('imagem'), productsController.update);
router.delete('/:id/delete', productsController.delete);

module.exports = router;