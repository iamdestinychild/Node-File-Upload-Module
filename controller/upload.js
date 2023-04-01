const path = require('path')
const {StatusCodes} = require('http-status-codes')

const uploadController = async (req, res) => {
    const productImage = req.files.image

    const imagePath = path.join(__dirname, `../public/uploads/${productImage.name}`)

    await productImage.mv(imagePath)
    res.status(StatusCodes.OK).json({
        image:{src: `../upload/${productImage.name}`}
    })
}

module.exports = uploadController