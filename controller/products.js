const Product = require('../model/products')
const { BadRequest } = require('../error/index')
const {StatusCodes} = require('http-status-codes')

const createProduct = async (req, res) => {
    const { name, price, image } = req.body
    
    if (!name || !price || !image) {
        throw new BadRequest('Name, Price and image are required fileds')
    }
    
    const product = await Product.create({ name, price, image })
    
    res.status(StatusCodes.OK).json({product})
}

const getAllProduct = async (req, res) => {
    const product = await Product.find({})

    res.status(StatusCodes.OK).json(product)
}

module.exports = {
    getAllProduct,
    createProduct
}