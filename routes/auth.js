const express = require("express");
const authRouter = express.Router();

const {
    loginController,
    register
} = require("../Controllers/authController")

authRouter.post("/register", register)
authRouter.post("/login", loginController)

module.exports = authRouter