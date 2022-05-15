const UserSchema = require("../models/UserSchema");
const catchAsyncErrors = require('../middlewares/catchAsyncError');

exports.createUser = catchAsyncErrors(async (req, res, next) => {
    const {name,email} = req.body;
    const User  = await UserSchema.create({name,email} );
    res.status(200).json({
        success: true,
        User 
    }) 
})

exports.getAllUsers = catchAsyncErrors(async (req, res, next) => {
    const AllUsers  = await UserSchema.find();
    res.status(200).json({
        success: true,
        users: AllUsers 
    }) 
})
exports.findUserById = catchAsyncErrors(async (req, res, next) => {
    const user  = await UserSchema.findById(req.params.id);
    res.status(200).json({
        success: true,
        users: user 
    }) 
})
exports.findUserByName = catchAsyncErrors(async (req, res, next) => {
    const {name} = req.params;
    const user  = await UserSchema.find( {  $search: name,$caseSensitive :false }  );
    res.status(200).json({
        success: true,
        user:user 
    }) 
})
exports.updateUser = catchAsyncErrors(async (req, res, next) => {
    const {name} = req.params;
    const user  = await UserSchema.find( {  $search: name,$caseSensitive :false }  );
    res.status(200).json({
        success: true,
        user:user 
    }) 
})