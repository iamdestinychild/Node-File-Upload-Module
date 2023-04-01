const product = require('../model/products')

const getProduct = (req, res) => {
    res.send('get product')
}

const createProduct = (req, res) => {
    res.send('create product')
}

module.exports = {
    getProduct,
    createProduct
}