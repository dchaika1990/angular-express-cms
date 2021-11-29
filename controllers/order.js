class OrderController {
	async GetAll(req, res) {
		res.status(200).json('Login from controller');
	}

	async Create(req, res) {
		res.status(200).json('Register from controller');
	}
}

module.exports = new OrderController();
