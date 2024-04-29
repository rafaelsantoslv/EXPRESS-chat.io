// BIBLIOTECAS
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

//CONFIGURAÇÕES
require("dotenv/config");
require("./lib/moduleAliases");
require("./database/index");

// INICIA APP
const app = express();
app.use(bodyParser.json());

// ROTAS
const Routes = require("@routes/routes.js");
app.use(Routes);

// MONTA BIBLIOTECAS
app.use(cors());

try {
  app.listen(process.env.SERVER_PORT || 6161);
  console.log(
    `[SERVER] ${process.env.SERVER_NAME} ONLINE NA PORTA ${process.env.SERVER_PORT}`
  );
} catch (error) {
  console.log(
    `[SERVER] ${process.env.SERVER_NAME} OFFLINE NA PORTA ${process.env.SERVER_PORT}`
  );
}
