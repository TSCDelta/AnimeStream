import React, { useState } from "react";
import axios from "axios";
import AnimeCard from "../components/AnimeCard";
import "./Home.css";

function Home() {
	const [animeList, setAnimeList] = useState([]);
	const [query, setQuery] = useState("");

	const searchAnime = async () => {
		try {
			const response = await axios.get(`/anime?query=${query}`);
			setAnimeList(response.data.data);
		} catch (error) {
			console.error("Error fetching anime:", error);
		}
	};

	return (
		<div className='home-page'>
			<div className='content'>
				<h2 className='home-title'>Search Anime</h2>
				<div className='search-bar'>
					<input
						type='text'
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						placeholder='Type an anime name'
						className='search-input'
					/>
					<button
						onClick={searchAnime}
						className='search-button'>
						Search
					</button>
				</div>
				<div className='anime-grid'>
					{animeList.map((anime) => (
						<AnimeCard key={anime.mal_id} anime={anime} />
					))}
				</div>
			</div>
		</div>
	);
}

export default Home;
