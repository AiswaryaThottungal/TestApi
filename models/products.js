const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    collection: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        enum: {
            values: ["Kids", "Women"],
            message: `{VALUE} is not supported`
        }
    },
    fabric: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: [true, "Price must be provided"],
    },  
    featured:{
        type: Boolean,
        default: false,
    },
    stock: {
        type: Number,
        required: true,
    }

})

module.exports = mongoose.model("Product", productSchema);