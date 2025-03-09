const express = require("express");
const cors = require("cors");
const animeRoutes = require("./routes/anime");
const favoritesRoutes = require("./routes/favorites");

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/anime", animeRoutes);
app.use("/favorites", favoritesRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
