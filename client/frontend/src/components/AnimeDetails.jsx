import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./AnimeDetails.css";

function AnimeDetails() {
	const { id } = useParams();
	const [anime, setAnime] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchAnimeDetails = async () => {
			try {
				const response = await axios.get(`/anime/${id}`);
				setAnime(response.data.data);
				setLoading(false);
			} catch (error) {
				console.error("Error fetching anime details:", error);
			}
		};
		fetchAnimeDetails();
	}, [id]);

	if (loading) {
		return <div className='loading'>Loading...</div>;
	}

	return (
		<div className='anime-details'>
			<h1 className='title'>{anime.title}</h1>
			<img
				src={anime.images.jpg.image_url}
				alt={anime.title}
				className='cover-image'
			/>
			<p className='synopsis'>{anime.synopsis}</p>
			<p>
				<strong>Episodes:</strong> {anime.episodes || "Unknown"}
			</p>
			<p>
				<strong>Rating:</strong> {anime.score || "N/A"}
			</p>
			<a
				href={anime.url}
				target='_blank'
				rel='noopener noreferrer'
				className='more-info'>
				View on MyAnimeList
			</a>
		</div>
	);
}

export default AnimeDetails;
