const tabUsers = require("@models/usuariosModel")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = async (req, res) => {
    const {email, senha} = req.body

    try {
        const user = await tabUsers.findOne({ where: { email } });

    if (!user) {
        return res.status(401).json({ message: "Usuário não encontrado" });
    }

    const decryptSenha = await bcrypt.compare(senha, user.senha);

    if (!decryptSenha) {
        return res.status(401).json({ message: "Senha incorreta" });
    }

    const token = jwt.sign(
        { userID: user.id, email: user.email },
        process.env.JSONWEBTOKEN_SECRET,
        { expiresIn: "30m" }
    );

    return res.status(200).json({ message: "Logado com Sucesso", token });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Erro interno do servidor" });
    }
}

const register = async (req, res) => {
    const {email, nome, senha} = req.body

    try {

        const encryptSenha = await bcrypt.hash(senha, 10)

        const [user, created] = await tabUsers.findOrCreate({
            where: {email},
            defaults: {nome, email, senha: encryptSenha}
        })
        res.status(200).json({message: created})
        console.log(user, created)


    } catch (error) {
        console.log(error)
        res.status(401).json({message: error})
    }
}



module.exports = {
    auth,
    register
}

