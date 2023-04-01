const mongoose = require('mongoose')

const productSchema = {
    name: {
        type: String,
        required: [true, 'Please Provide Name']
    },

    price: {
        type: Number,
        required: [true, 'Please Provide Price']
    },
    image: {
        type: String,
        required: [true, 'Please Provide Image']
    }

}

module.exports = mongoose.model('Product', productSchema)