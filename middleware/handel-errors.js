const { StatusCodes } = require('http-status-codes')

const handelError = (err, req, res, next) => {
    
    const customError = {
        msg: err.message || 'something went wrong try again later',
        statuseCode: err.statuseCode || StatusCodes.INTERNAL_SERVER_ERROR
    }

    res.statuseCode(customError.statuseCode).json({msg: customError.msg})

}



