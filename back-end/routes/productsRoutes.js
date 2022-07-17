const express = require("express");
const { getAllProducts, removeProduct, findProductById, findProductByName, createProduct, updateProduct } = require("../controllers/ProductsController");
const authToken = require("../middlewares/authenticateToken");

const router = express.Router();

// router.get("/")
router.route("/").get(authToken, getAllProducts);
router.route("/search/:id").get(findProductById);
// router.route("/findByName/:name").get(findProductByName);
router.route("/create").post(createProduct);
router.route("/update/:id").patch(updateProduct);
router.route("/remove/:id").get(removeProduct);


module.exports = router;