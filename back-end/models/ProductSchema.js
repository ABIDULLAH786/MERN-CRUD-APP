const mongoose = require('mongoose')
const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "please Enter Name"],
            maxlength: [30, "Product title cannot exceed 30 charachters"],
        },
        description:{
            type: String,
            required: [true, "Description is required"]
        },
        price:{
            type: Number,
            required: true
        }


    }
)
module.exports = mongoose.model('Product',ProductSchema);