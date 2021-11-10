import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<StyledNav>
			<h1>
				<Link id="logo" to="/">
					Capture
				</Link>
			</h1>
			<ul>
				<li>
					<Link to="/">About Us</Link>
				</li>
				<li>
					<Link to="/work">Our Work</Link>
				</li>
				<li>
					<Link to="/contact">Contact Us</Link>
				</li>
			</ul>
		</StyledNav>
	);
};

const StyledNav = styled.nav`
	min-height: 10vh;
	display: flex;
	margin: auto;
	align-items: center;
	justify-content: space-between;
	padding: 1rem 10rem;
	background: #282828;
	color: white;
	position: sticky;
	top: 0;
	z-index: 10;
	/* width: 100%; */

	ul {
		list-style: none;
		display: flex;
	}
	a {
		text-decoration: none;
		color: white;
	}
	#logo {
		font-family: lobster;
		font-weight: lighter;
		font-size: 1.5rem;
	}
	li {
		padding-left: 10rem;
		position: relative;
	}
	@media (max-width: 1200px) {
		flex-direction: column;
		padding: 1rem;
		/* width: 100%; */
		ul {
			padding: 2rem;
			justify-content: space-around;
			width: 100%;
			li {
				padding: 0;
			}
		}
		#logo {
			/* padding: 2rem; */
			display: inline-block;
			margin-top: 1rem;
		}
	}
`;

export default Nav;
