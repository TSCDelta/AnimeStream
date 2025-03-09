import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
	return (
		<header className='header'>
			<h1>Anime Guide</h1>
			<nav>
				<Link to='/'>Home</Link>
				<Link to='/favorites'>Favorites</Link>
			</nav>
		</header>
	);
}

export default Header;
