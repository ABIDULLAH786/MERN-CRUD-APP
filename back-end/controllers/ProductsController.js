const ProductSchema = require("../models/ProductSchema");

exports.createProduct = async (req, res, next) => {
    const { title, description, price } = req.body;
    const Product = await ProductSchema.create({ title, description, price });
    res.status(200).json({
        success: true,
        Product
    })
}

exports.getAllProducts = async (req, res, next) => {
    console.log("Here is all product API")
    const AllProducts = await ProductSchema.find();
    res.status(200).json({
        success: true,
        products: AllProducts
    })
}

// remove product
exports.removeProduct = async (req, res, next) => {
    console.log("Here is remove product API")

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
    const product = await ProductSchema.findById(req.params.id);
    res.status(200).json({
        success: true,
        product: product
    })
}
exports.findProductByName = async (req, res, next) => {
    const { name } = req.params;
    const product = await ProductSchema.find({ name: name});
    res.status(200).json({
        success: true,
        product: product
    })
}

// Update Product
exports.updateProduct = async (req, res, next) => {

    ProductSchema.findById(req.params.id, async (err, result) => {
        if (!result) {
            res.status(404).send(`Product Not Found`);
        } else {
            const product = await ProductSchema.findByIdAndUpdate(req.params.id,req.body);
            res.status(200).json("product Updated")
        }
    });

    console.log("Here is update product API")

}