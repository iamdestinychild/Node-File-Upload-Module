const CustomError = require('./error')
const {StatusCodes} = require('http-status-codes')

class BadRequest extends CustomError{
    constructor(message) {
        super(message)
        this.statusCode = StatusCodes.BAD_REQUEST
    }

}