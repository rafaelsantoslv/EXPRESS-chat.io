// const tabUsers = require("@models/tabUsers")

const auth = async (req, res) => {
    console.log(req.body.email)

    res.status(200).json({message: 'teste'})
}





module.exports = {
    auth
}

