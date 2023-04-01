const path = require('path')
const {StatusCodes} = require('http-status-codes')
const { BadRequest } = require('../error')

const uploadController = async (req, res) => {

    console.log(req.files)

    const productImage = req.files.image


    if (!req.files) {
        throw new BadRequest('No Files Found')
    }

    if (!productImage.mimetype.startsWith('image')) {
        throw new BadRequest('Image Not Provided')
    }

    const maxSize = 1024 * 1024

    if (productImage.size > maxSize) {
        throw new BadRequest('File can not be greater than 1kb')
    }


    const imagePath = path.join(__dirname, `../public/uploads/${productImage.name}`)

    await productImage.mv(imagePath)
    res.status(StatusCodes.OK).json({
        image:{src: `../upload/${productImage.name}`}
    })
}

module.exports = uploadController