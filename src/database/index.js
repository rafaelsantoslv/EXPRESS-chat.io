const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const connection = new Sequelize(dbConfig);

async function testConnection() {
  try {
    await connection.authenticate();
    console.log("[SERVER] BANCO DE DADOS ONLINE");
  } catch (error) {
    console.log(error.original, "[SERVER] BANCO DE DADOS OFFLINE");
  }
}
testConnection();

module.exports = connection;