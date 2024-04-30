const bodyParser = require("body-parser");
const express = require("express");
const routes = express.Router();
const authController = require("@controllers/authController.js");
const { validateAuth } = require("@middleware/authMiddleware.js")

routes.post("/api/signin", validateAuth("signIn"), authController.signIn);
routes.post("/api/signup", validateAuth("signUp"), authController.signUp);

module.exports = routes;