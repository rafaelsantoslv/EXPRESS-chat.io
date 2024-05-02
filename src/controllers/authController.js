// const tabUsers = require('@models/usuariosModel')
const authService = require('@services/authService.js')
// const { validateAuth } = require("@middleware/authMiddleware.js")
const { validationResult } = require("express-validator");


const authController = {
  async signIn(req, res) {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        throw new Error("Ensira o e-mail válido e uma senha de 8 a 18 carácteres")
      }
      console.log(errors)
      const { email, senha } = req.body
      const login = await authService.signIn(email, senha)
      res.status(201).json(login)
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
  },

  async signUp(req, res) {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        throw new Error("Os dados inseridos são inválidos")
      }
      const { email, nome, senha } = req.body
      const register = await authService.signUp(email, nome, senha)
      res.status(200).json(register)
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
  }
}

module.exports = authController
