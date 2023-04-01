const express = require('express')
require('dotenv').config()
require('express-async-errors')

const app = express()

const handelError = require('./middleware/handel-errors')
const notFound = require('./middleware/notfound')





app.use(handelError)
app.use(notFound)



const port = process.env.PORT || 4444

const start = () => {
    try {

        app.listen(port, console.log(`server is listening on port ${port}`))
    } catch (e) {
        console.log(e)
    }
}

start()