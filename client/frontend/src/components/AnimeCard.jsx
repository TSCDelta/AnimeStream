import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./AnimeCard.css";

function AnimeCard({ anime, hideButton = false }) {
	const addToFavorites = async (e) => {
		e.preventDefault();
		e.stopPropagation();
		try {
			await axios.post("/favorites", anime);
			alert(`${anime.title} added to favorites!`);
		} catch (error) {
			console.error("Error adding to favorites:", error);
		}
	};

	return (
		<Link to={`/anime/${anime.mal_id}`} className='anime-card'>
			<img src={anime.images.jpg.image_url} alt={anime.title} />
			<h3 className='anime-card-title'>{anime.title}</h3>
			{!hideButton && (
				<button onClick={addToFavorites} className='add-to-favorites-button'>
					Add to Favorites
				</button>
			)}
		</Link>
	);
}

export default AnimeCard;
