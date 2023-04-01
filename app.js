const express = require('express')
require('dotenv').config()
require('express-async-errors')

const fileUpload = require('express-fileupload')

const app = express()

app.use(express.json())

app.use(fileUpload())

const connectDB = require('./database/connect')


const handelError = require('./middleware/handel-errors')
const notFound = require('./middleware/notfound')



// routes

const productRouter = require('./routes/products')

app.use('/api/v1/product', productRouter)


// middleware
app.use(handelError)
app.use(notFound)



const port = process.env.PORT || 4444

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on port ${port}`))
    } catch (e) {
        console.log(e)
    }
}

start()