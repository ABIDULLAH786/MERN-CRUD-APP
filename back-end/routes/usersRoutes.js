const express = require("express");
// const { getAllUsers, findUserById, findUserByName, createUser, updateUser } = require("../controllers/usersController");
const { Login, Register, Logout, getAllUsers } = require("../controllers/UsersController");

const router = express.Router();


// router.get("/signin", Middleware_IsLoggedIn, LoginPage);
router.post("/signin", Login);
router.get("/logout", Logout);

// router.get("/signup", Middleware_IsLoggedIn, RegisterPage);
router.post("/signup", Register);


// router.get("/")
router.route("/allUsers").get(getAllUsers);
// router.route("/:id").get(findUserById);
// // router.route("/findByName/:name").get(findUserByName);
// router.route("/new").post(createUser);
// router.route("/update").put(updateUser);


module.exports = router;