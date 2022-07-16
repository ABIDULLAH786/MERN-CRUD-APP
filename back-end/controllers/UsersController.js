const UserSchema = require("../models/UserSchema");

exports.createUser = async (req, res) => {
    const {name,email} = req.body;
    const User  = await UserSchema.create({name,email} );
    res.status(200).json({
        success: true,
        User 
    }) 
}

exports.getAllUsers = async (req, res) => {
    const AllUsers  = await UserSchema.find();
    res.status(200).json({
        success: true,
        users: AllUsers 
    }) 
}

exports.findUserById = async (req, res) => {
    const user  = await UserSchema.findById(req.params.id);
    res.status(200).json({
        success: true,
        users: user 
    }) 
}

exports.findUserByName = async (req, res) => {
    const {name} = req.params;
    const user  = await UserSchema.find( {  $search: name,$caseSensitive :false }  );
    res.status(200).json({
        success: true,
        user:user 
    }) 
}

exports.updateUser = async (req, res) => {
    const {name} = req.params;
    const user  = await UserSchema.find( {  $search: name,$caseSensitive :false }  );
    res.status(200).json({
        success: true,
        user:user 
    }) 
}