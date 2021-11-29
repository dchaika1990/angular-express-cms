class AuthController {
    async Login(req, res) {
        res.status(200).json('Login from controller')
    }

    async Register(req, res) {
        res.status(200).json('Register from controller')
    }
}

module.exports = new AuthController()