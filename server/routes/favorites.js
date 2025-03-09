const express = require("express");

const router = express.Router();
let favorites = [];

router.get("/", (req, res) => {
	res.json(favorites);
});

router.post("/", (req, res) => {
	const anime = req.body;
	if (!favorites.find((fav) => fav.mal_id === anime.mal_id)) {
		favorites.push(anime);
	}
	res.json({ message: "Added to favorites", favorites });
});

router.delete("/:id", (req, res) => {
	const id = parseInt(req.params.id);
	favorites = favorites.filter((fav) => fav.mal_id !== id);
	res.json({ message: "Removed from favorites", favorites });
});

module.exports = router;
