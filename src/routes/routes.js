const bodyParser = require("body-parser");
const express = require("express");
const routes = express.Router();
const authController = require("@controllers/authController.js");

routes.post("/api/signin", authController.signIn);
routes.post("/api/signup", authController.signUp);

module.exports = routes;