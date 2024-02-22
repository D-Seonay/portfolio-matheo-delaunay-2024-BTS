import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import './index.css';
import GlassBackground from './component/ui/GlassBackground';
import Works from './component/Works';
import CursorTracker from "./component/ui/CursorTracker";
import WavyBorder from "./component/ui/WavyBorder";
import AboutMe from "./component/AboutMe";
import Error404Page from "./component/Error404";
import Footer from "./component/Footer";

function App() {
	return (
		<>

			<GlassBackground>
				<Router>
					<Navbar />
					<CursorTracker />
					<Routes>
						<Route path="/" element={<Works />} />
						<Route path="/about" element={<AboutMe />} />
						<Route path="/works" element={<Works />} />
						<Route path="*" element={<Error404Page/>} />
						{/* Définissez les autres routes ici */}
					</Routes>
					<Footer />
				</Router>
			</GlassBackground>
		</>
	);
}

export default App;
