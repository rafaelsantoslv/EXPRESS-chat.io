const { body } = require("express-validator")

const validateAuth = (method) => {
    switch (method) {
        case "signIn":
            return [
                body("email").isEmail().withMessage('e-mail inválido!').exists().withMessage("Preencha o e-mail!"),
                body("senha").isLength({ min: 8, max: 18 }).withMessage("Senha inválida. Deve ter entre 3 e 18 caracteres").exists().withMessage("Senha é obrigatória")
            ];
        case "signUp":
            return [
                body("email").isEmail().withMessage("Email inválido").exists().withMessage("Email é obrigatório"),
                body("senha").isLength({ min: 8, max: 18 }).withMessage("Senha inválida. Deve ter entre 8 e 18 caracteres").exists().withMessage("Senha é obrigatória"),
                body("nome").exists().withMessage("Nome é obrigatório"),
            ]
    }
}


module.exports = {
    validateAuth
}