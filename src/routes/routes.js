const express = require("express");
const loginController = require('@controllers/loginController')

console.log(loginController)
const routes = express.Router();


routes.get('/', loginController.realizaLogin)

module.exports = routes;