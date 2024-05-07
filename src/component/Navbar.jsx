import React from 'react';
import { NavbarStyle, Title, Link, Icons, NavbarLink } from '../styles';
import { IoMdMail } from "react-icons/io";
import { useTheme } from "./ThemeContext";
import { useLocation } from 'react-router-dom'; // Importer le hook useLocation

function Navbar() {
	const { theme } = useTheme();
	const location = useLocation(); // Utiliser le hook useLocation pour obtenir l'URL actuelle

	return (
		<NavbarStyle theme={theme}>
			<Link href="/">
				<Title theme={theme}>SEONAY</Title>
			</Link>
			<NavbarLink theme={theme} className="row">
				{/* Link page about me*/}
				<Link theme={theme} href="/about" className={location.pathname === '/about' ? 'active' : ''}>
					<p>/About-me</p>
				</Link>
				{/* Link page BTS*/}
				<Link theme={theme} href="/BTS" className={location.pathname === '/BTS' ? 'active' : ''}>
					<p>/BTS</p>
				</Link>
				{/* Link page Veille Techno*/}
				<Link theme={theme} href="/bts/veille-technologique" className={location.pathname === '/Veille-Techno' ? 'active' : ''}>
					<p>/Veille-Techno</p>
				</Link>

				{/*Icon mail*/}
				<Link href="mailto:matheodelaunay04@gmail.com" aria-label="Mail">
					<Icons theme={theme}><IoMdMail /></Icons>
				</Link>
			</NavbarLink>
		</NavbarStyle>
	);
}

export default Navbar;
