const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/", async (req, res) => {
	try {
		const { query } = req.query;
		const response = await axios.get(
			`https://api.jikan.moe/v4/anime?q=${query}&limit=10`
		);
		res.json(response.data);
	} catch (error) {
		res.status(500).json({ message: "Failed to fetch anime" });
	}
});

router.get("/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const response = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
		res.json(response.data);
	} catch (error) {
		console.error("Error fetching anime details:", error.message);
		res.status(500).json({ message: "Failed to fetch anime details" });
	}
});

module.exports = router;
