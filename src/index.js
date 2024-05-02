const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const http = require("http");
const socketIo = require("socket.io");

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
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'public'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

// SOCKET IO
const server = http.createServer(app);
const io = socketIo(server);

io.on("connection", (socket) => {
  console.log("Novo cliente conectado " + socket.id);

  socket.on('sendMessage', data => {
    console.log(data)
  })
});

server.listen(process.env.SERVER_PORT || 6161, () => {
  console.log(
    `[SERVER] ${process.env.SERVER_NAME} ONLINE NA PORTA ${process.env.SERVER_PORT}`
  );
});
