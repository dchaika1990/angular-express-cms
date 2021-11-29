class PositionController {
    async GetById(req, res) {
        res.status(200).json('Login from controller')
    }

    async Create(req, res) {
        res.status(200).json('Register from controller')
    }

    async Remove(req, res) {
        res.status(200).json('Login from controller')
    }

    async Update(req, res) {
        res.status(200).json('Register from controller')
    }
}

module.exports = new PositionController()