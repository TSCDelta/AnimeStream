import React, { useEffect, useState } from "react";
import axios from "axios";
import AnimeCard from "./AnimeCard";
import "./Favorites.css";

function Favorites() {
	const [favorites, setFavorites] = useState([]);

	useEffect(() => {
		const fetchFavorites = async () => {
			try {
				const response = await axios.get("/favorites");
				setFavorites(response.data);
			} catch (error) {
				console.error("Error fetching favorites:", error);
			}
		};
		fetchFavorites();
	}, []);

	return (
		<div className='favorites-page'>
			<h2 className='favorites-title'>Your Favorites</h2>
			<div className='favorites-grid'>
				{favorites.map((anime) => (
					<AnimeCard key={anime.mal_id} anime={anime} hideButton />
				))}
			</div>
		</div>
	);
}

export default Favorites;
