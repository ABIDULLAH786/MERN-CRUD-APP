const UserSchema = require("../models/UserSchema");
const bcrypt = require("bcrypt");
const sendToken = require("../utils/jwtTocken");
const jwt = require("jsonwebtoken");

async function authenticate(req) {
    const { email, password } = req.body;
    const user = await UserSchema.findOne({ email: email.trim() });
    if (user) {
        const match = await bcrypt.compare(password, user.password);
        if (match) {
            // req.session.uid = user._id;
            // isCurrentlySignIn = true;
            // console.log(user._id)

            return user._id;
        }
    } else {
        console.log("Please enter a valid name or user name")
        return false;
    }

}

exports.getAllUsers = async (req, res) => {
    const findUser = await UserSchema.find()
    res.status(200).json({
        success: true,
        findUser
    })
}
exports.Login = async (req, res) => {
    // this will return user id 
    let isfound = await authenticate(req);
    if (isfound) {
        // req.session.isAuth = true;
        const accessToken = jwt.sign(
            { id: isfound },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: process.env.JWT_EXPIRES_TIME
            }
        );

        res.status(200).json({ accessToken, id: isfound, message: "Login Done" })
    }
    else
        res.status(400).json({ message: "Invalid Data Entered" })
}

exports.Logout = async (req, res) => {

}
exports.Register = async (req, res) => {
    const { name, email, password } = req.body
    console.log(password)
    console.log("Here in register page");
    const findUser = UserSchema.findOne({ email })
    if (findUser.length != 0) {

        const userCreated = await UserSchema.create(
            {
                name: name.trim(),
                email: email.trim(),
                password: password
            },
            (err, result) => {
                if (err) {
                    return res.send(err);
                }
                const token = jwt.sign({ email: email }, process.env.JWT_SECRET_KEY, {
                    expiresIn: process.env.JWT_EXPIRES_TIME
                })
                console.log(result)

                if (result)
                    res.status(200).json({
                        message: "reg",
                        token: token
                    })
                else
                    res.statusCode(403);
            });

        // sendToken(userCreated, 200, res)
        console.log(userCreated)

    }
    else {
        console.log("email already registered")
        res.send({
            email: user.email,
            msg: "The user already exists",
        })
    }

}
exports.RegisterPage = async (req, res) => {
    const data = req.flash("data")[0];
    let email = "";

    if (data) {
        email = data.email;
    }

    res.render("signup", {
        errors: req.flash("validationErrors"),
        email,
    });
}
exports.LoginPage = async (req, res) => {
    res.render("signin")
}
