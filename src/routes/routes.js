const bodyParser = require('body-parser')
const express = require("express");
const routes = express.Router();
const authController = require('@controllers/authController.js')



routes.post('/api/auth', authController.auth)

module.exports = routes;