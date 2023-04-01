const express = require('express')

const {getProduct, createProduct} = require('../controller/products')
const uploadProductImage = require('../controller/upload')

const router = express.Router()

router.route('/').get(getProduct).post(createProduct)
router.route('/upload').post(uploadProductImage)

module.exports = router