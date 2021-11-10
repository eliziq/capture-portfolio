import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MovieState } from "../movieState";
import { useHistory } from "react-router-dom";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "./animation";

const MovieDetail = () => {
	const history = useHistory();
	const url = history.location.pathname;
	const [movies, setMovies] = useState(MovieState);
	const [movie, setMovie] = useState(null);

	//Use Effect
	useEffect(() => {
		const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
		//returns an array of an object
		setMovie(currentMovie[0]);
		// run everytime when movie or url updates
	}, [movies, url]);

	return (
		<>
			{/* check if movie is available */}
			{movie && (
				<Details
					variants={pageAnimation}
					initial="hidden"
					animate="show"
					exit="exit"
				>
					<Headline>
						<h2>{movie.title}</h2>
						<img src={movie.mainImg} alt={movie.title} />
					</Headline>
					<Awards>
						{movie.awards.map((award) => (
							<Award
								title={award.title}
								description={award.description}
								key={award.title}
							/>
						))}
					</Awards>
					<ImageDisplay>
						<img src={movie.secondaryImg} alt={movie.title} />
					</ImageDisplay>
				</Details>
			)}
		</>
	);
};

const Details = styled(motion.div)`
	color: white;
`;
const Headline = styled.div`
	min-height: 90vh;
	padding-top: 20vh;
	position: relative;
	text-align: center;
	h2 {
		position: absolute;
		top: 10%;
		left: 50%;
		transform: translate(-50%, -10%);
		font-size: 3rem;
	}
	img {
		margin-top: 3rem;
		width: 100%;
		height: 90vh;
		object-fit: cover;
		@media (max-width: 1200px) {
			width: 100%;
			height: 70vh;
		}
	}
`;
const Awards = styled.div`
	min-height: 80vh;
	display: flex;
	margin: 5rem 10rem;
	align-items: start;
	justify-content: space-around;
	@media (max-width: 1200px) {
		margin: 1rem;
		display: block;
	}
`;
const AwardStyle = styled.div`
	padding: 5rem;
	flex: 1;
	.title-container {
		display: flex;
		min-height: 5rem;
		align-items: end;
	}
	h3 {
		font-size: 2rem;
	}
	.line {
		width: 100%;
		background: #23d997;
		height: 0.5rem;
		margin: 1rem 0rem;
	}
`;
const ImageDisplay = styled.div`
	min-height: 50vh;
	img {
		width: 100%;
		height: 100vh;
		object-fit: cover;
		@media (max-width: 1200px) {
			width: 100%;
			height: 70vh;
		}
	}
`;

const Award = ({ title, description }) => {
	return (
		<AwardStyle>
			<div className="title-container">
				<h3>{title}</h3>
			</div>
			<div className="line"></div>
			<p>{description}</p>
		</AwardStyle>
	);
};

export default MovieDetail;
