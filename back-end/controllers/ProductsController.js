const { default: mongoose } = require("mongoose");
const ProductSchema = require("../models/ProductSchema");

exports.createProduct = async (req, res, next) => {
    // if (!req.body.title || !req.body.price || !req.body.description) {
    //     res.status(400).json("Please fill product details")
    //     return;
    // }

    const { title, description, price } = req.body;
    const { id } = req.body;
    console.log("User ID: ", id);
    try {
        const product = await ProductSchema.create({ userId: id, title, description, price });
        console.log(product)
        res.status(200).json({
            success: true,
            product
        })
    } catch (err) {
        console.log(err)
        res.status(400).json({
            success: false,
            msg: "The Product Creation Failed"
        })
    }
}
// Get All Products 
exports.getAllProducts = async (req, res, next) => {
    const AllProducts = await ProductSchema.find().populate("userId");
    res.status(200).json({
        success: true,
        products: AllProducts
    })
}

// remove product
exports.removeProduct = async (req, res, next) => {
    console.log("here in remove");
    ProductSchema.findById(req.params.id, (err, result) => {
        if (!result) {
            res.status(404).send("Product Not Found");
        } else {
            ProductSchema.findByIdAndRemove(req.params.id)
                .then(function () {
                    res.status(200).json("product deleted");
                })
                .catch(function (err) {
                    res.status(400).send("product delete failed.");
                });
        }
    });
}

// find/search product by id
exports.findProductById = async (req, res, next) => {
    try {
        const product = await ProductSchema.findById(req.params.id);
        // res.status(200).json(product)

        res.status(200).json({
            success: true,
            product: product
        })
    } catch (err) {
        console.log(err)
    }


}
exports.findProductByName = async (req, res, next) => {
    const { name } = req.params;
    const product = await ProductSchema.find({ name: name });
    res.status(200).json({
        success: true,
        product: product
    })
}

// Update Product
exports.updateProduct = async (req, res) => {
    let { title, price, description } = req.body;
    let id = req.params.id;

    ProductSchema.findByIdAndUpdate({ _id: id }, { $set: { title, price, description } })
        .then(function () {
            res.json("Product updated");
        })
        .catch(function (err) {
            res.status(422).send("Product update failed.");
        });
}