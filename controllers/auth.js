class AuthController {
	async Login(req, res) {
		const { email, password } = req.body;
		res.status(200).json({
			login: {
				email,
				password,
			},
		});
	}

	async Register(req, res) {
		res.status(200).json('Register from controller');
	}
}

module.exports = new AuthController();
