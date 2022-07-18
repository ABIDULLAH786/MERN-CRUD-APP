const mongoose = require('mongoose')
const ProductSchema = new mongoose.Schema(
    {
        userId: {
            required: true,
            type: mongoose.Schema.Types.ObjectId,
            ref: "users"
        },
        title: {
            type: String,
            required: [true, "please Enter Name"],
            maxlength: [30, "Product title cannot exceed 30 charachters"],
        },
        description: {
            type: String,
            required: [true, "Description is required"]
        },
        price: {
            type: Number,
            required: true
        },
        image: {
            type: String,
            default: ""
        }


    }
)
module.exports = mongoose.model('Product', ProductSchema);