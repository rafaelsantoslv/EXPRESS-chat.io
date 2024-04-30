'use strict'
const { Model, DataTypes } = require('sequelize')
const connection = require('../database/index')

class tabUsers extends Model {
  static associate (models) {}
}
tabUsers.init(
  {
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING // Corrigido para STRING
  },
  {
    sequelize: connection,
    tableName: 'tab_usuarios'
  }
)
// return tabUsers;

module.exports = tabUsers
