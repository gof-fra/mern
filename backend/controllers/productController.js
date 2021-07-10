
const Product = require('../models/product')

// Create new product => /api/v1/product/new
exports.newProduct = async (req, res, next) => {    

    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
    })
}


exports.getProducts = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: 'Cette racine montrera tous nos produits'
    })
}