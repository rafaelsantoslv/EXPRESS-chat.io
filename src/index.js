const express = require('express');
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

require("dotenv/config");
require("./lib/moduleAliases");

const app = express();
const routes = require("@routes/routes.js");
// const teste = require("@controllers/loginController");
// console.log(teste)


app.use(cors())
app.use(express.json())
app.use(routes)
app.use(express.static(path.join(__dirname, "app", "public")));



try {
    app.listen(process.env.SERVER_PORT || 6161);
    console.log(
      `[SERVER] ${process.env.SERVER_NAME} ONLINE NA PORTA ${process.env.SERVER_PORT}`,
    );
  } catch (error) {
    console.log(
      `[SERVER] ${process.env.SERVER_NAME} OFFLINE NA PORTA ${process.env.SERVER_PORT}`,
    );
  }
