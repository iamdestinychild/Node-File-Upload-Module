const product = require('../model/products')

const getProduct = async (req, res) => {
    res.send('get product')
}

const createProduct = async (req, res) => {
    res.send('create product')
}

module.exports = {
    getProduct,
    createProduct
}