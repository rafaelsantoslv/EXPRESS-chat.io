const tabUsers = require('@models/usuariosModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const authService = {
  async signIn(email, senha) {
    const user = await tabUsers.findOne({ where: { email } })
    if (!user) {
      throw new Error('Usuario não encontrado ou senha incorreta')
    }
    const decryptSenha = bcrypt.compare(senha, user.senha)
    if (!decryptSenha) {
      throw new Error('Usuario não encontrado ou senha incorreta')
    }
    const token = jwt.sign(
      { userID: user.id, email: user.email },
      process.env.JSONWEBTOKEN_SECRET,
      { expiresIn: '30m' }
    )
    return { token: token }
  },

  async signUp(email, nome, senha) {
    const encryptSenha = await bcrypt.hash(senha, 10)

    const [user, created] = await tabUsers.findOrCreate({
      where: { email },
      defaults: { nome, email, senha: encryptSenha }
    })
    return { message: created ? 'Usuário criado com sucesso' : 'Usuário já existe' }


  }
}

module.exports = authService
