const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "please Enter Name"],
            maxlength: [30, "Your Name cannot exceed 30 charachters"],
        },
        email:{
            type: String,
            required: [true, "Please Enter Email"]
        }
    }
)
module.exports = mongoose.model('User',UserSchema);