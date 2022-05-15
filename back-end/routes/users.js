const express = require("express");
const { getAllUsers, findUserById, findUserByName, createUser, updateUser } = require("../controllers/usersController");

const router = express.Router();

router.get("/")
router.route("/").get(getAllUsers);
router.route("/:id").get(findUserById);
router.route("/findByName/:name").get(findUserByName);
router.route("/new").post(createUser);
router.route("/update").put(updateUser);


module.exports= router;