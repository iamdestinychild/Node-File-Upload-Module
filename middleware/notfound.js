const { StatusCodes } = require('http-status-codes')

const notFound = (req, res) => {
    res.statusCode(StatusCodes.NOT_FOUND).json({msg:'ooops nothing here'})
}

module.exports = notFound