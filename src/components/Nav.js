import React from "react";
import styled from "styled-components";

const Nav = () => {
	return (
		<StyledNav>
			<h1>
				<a id="logo" href="#">
					Capture
				</a>
			</h1>
			<ul>
				<li>
					<a href="#">About Us</a>
				</li>
				<li>
					<a href="#">Our Work</a>
				</li>
				<li>
					<a href="#">Contact Us</a>
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
`;

export default Nav;
