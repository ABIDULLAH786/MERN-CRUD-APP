const UserSchema = require("../models/UserSchema");
const bcrypt = require("bcrypt");

async function authenticate(req) {
    const { email, password } = req.body;
    let errmsg = ""
    const user = await UserSchema.findOne({ email: email.trim() });
    if (user) {
        const match = await bcrypt.compare(password, user.password);
        if (match) {
            // req.session.uid = user._id;
            // isCurrentlySignIn = true;
            return true;
        }
    } else {
        console.log("Please enter a valid name or user name")
        errmsg = "Please enter a valid name or user name";
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
    console.log("here in signin api");
    let isfound = await authenticate(req);
    if (isfound) {
        // req.session.isAuth = true;
        res.status(200).json("Login Done")
    }
    else
        res.status(400).json("Login Done")
}

exports.Logout = async (req, res) => {
    req.session.destroy();
    isCurrentlySignIn = false;
    res.redirect("/signin");
}
exports.Register = async (req, res) => {
    const { name, email, password } = req.body
    console.log(password)
    console.log("Here in register page");
    const findUser = UserSchema.findOne({ email })
    if (findUser.length != 0) {

        const result = await UserSchema.create(
            {
                name: name.trim(),
                email: email.trim(),
                password: password
            },
            (err, result) => {
                if (err) {
                    return res.send(err);
                }
            });

    }
    else {
        console.log("email already registered")
        errmsg = "Please enter an unused email";
        res.send(errmsg)
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
