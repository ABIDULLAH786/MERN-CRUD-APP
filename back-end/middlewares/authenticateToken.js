const jwt = require("jsonwebtoken");
require("dotenv").config();

const authToken = async (req, res, next) => {
    // Option 1
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1]; // Bearer Token

    // Option 2
    // const token = req.header("x-auth-token");

    // If token not found, send error message
    if (!token) {
        res.status(401).json({
            errors: [
                {
                    msg: "Token not found",
                },
            ],
        });
        return;
    }

    // Authenticate token
    try {
        const user = await jwt.verify(token, process.env.JWT_SECRET_KEY);
        if (user) {
            console.log(user);
            next();
        }
        else res.status(403).json({
            errors: [
                {
                    msg: "Invalid token",
                },
            ],
        });


        // req.user = user.email;
    } catch (error) {
        res.status(403).json({
            errors: [
                {
                    msg: "Invalid token",
                },
            ],
        });
    }
};

module.exports = authToken;