const path = require('path')
const fs = require('fs')
const cloudinary = require('cloudinary').v2
const {StatusCodes} = require('http-status-codes')
const { BadRequest } = require('../error')

const uploadController = async (req, res) => {

    const productImage = req.files.image


    // if (!req.files) {
    //     throw new BadRequest('No Files Found')
    // }

    // if (!productImage.mimetype.startsWith('image')) {
    //     throw new BadRequest('Image Not Provided')
    // }

    // const maxSize = 1024 * 1024

    // if (productImage.size > maxSize) {
    //     throw new BadRequest('File can not be greater than 1kb')
    // }


    
    const result = await cloudinary.uploader.upload(
        productImage.tempFilePath,
        {
            use_filename: true,
            folder:'file_upload'
        }
    )

    fs.unlinkSync(productImage.tempFilePath)
     
    res.status(StatusCodes.OK).json({image:result.url})
}

module.exports = uploadController