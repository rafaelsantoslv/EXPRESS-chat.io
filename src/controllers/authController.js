const tabUsers = require('@models/usuariosModel')
const authService = require('@services/authService.js')

const authController = {
  async signIn(req, res) {
    try {
      const { email, senha } = req.body
      const login = await authService.signIn(email, senha)
      res.status(201).json(login)
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
  },

  async signUp(req, res) {
    try {
      const { email, nome, senha } = req.body
      const register = await authService.signUp(email, nome, senha)
      res.status(200).json(register)
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
  }
}

module.exports = authController
