import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./components/Favorites";
import AnimeDetails from "./components/AnimeDetails";
import Header from "./components/Header";

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/favorites' element={<Favorites />} />
				<Route path='/anime/:id' element={<AnimeDetails />} />
			</Routes>
		</Router>
	);
}

export default App;
