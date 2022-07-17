const jwt = require("jsonwebtoken");

const express = require('express')
const cors = require('cors')
const app = new express()
app.use(express.json())
app.use(cors())


const ProductRouter = require("./routes/productsRoutes")
app.use("/products", ProductRouter);

const UserRouter = require("./routes/usersRoutes")
const authToken = require('./middlewares/authenticateToken')
const { response } = require('express')
app.use("/users", UserRouter);


function authenticateToken(req, res, next) {

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(" ")[1];

    if (token == null) return res.sendStatus(401);
    console.log(token)
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
    console.log(decoded);
    res.json({
        msg: "sahi"
    })
}

app.get("/check", authenticateToken, (req, res, next) => {
    console.log("here in check api")
    res.status(200).send({ message: "Authenticated" })
})
module.exports = app;