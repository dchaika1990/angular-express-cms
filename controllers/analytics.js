class AnalyticsController {
	async Overview(req, res) {
		res.status(200).json('Login from controller');
	}

	async Analytic(req, res) {
		res.status(200).json('Register from controller');
	}
}

module.exports = new AnalyticsController();
