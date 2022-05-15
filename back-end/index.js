const express  = require('express')
const cors = require('cors')
const app = new express()
app.use(express.json())
app.use(cors())


const UserRouter = require("./routes/users")
app.use("/users",UserRouter);


module.exports = app;