const express = require('express')

const {getAllProduct, createProduct} = require('../controller/products')
const uploadProductImage = require('../controller/upload')

const router = express.Router()

router.route('/').get(getAllProduct).post(createProduct)
router.route('/upload').post(uploadProductImage)

module.exports = router