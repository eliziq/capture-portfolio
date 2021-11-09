import React from "react";
import styled from "styled-components";
import { Layout } from "../styles";
//Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "./animation";
import { Hide } from "../styles";

const ContactUs = () => {
	return (
		<StyledContact
			variants={pageAnimation}
			initial="hidden"
			animate="show"
			exit="exit"
			className="contact-us"
			style={{ background: "#fff" }}
		>
			<Title>
				<Hide>
					<motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
				</Hide>
			</Title>
			<div>
				<Hide>
					<Social variants={titleAnim}>
						<Circle />
						<h2>Send us a message</h2>
					</Social>
				</Hide>
				<Hide>
					<Social variants={titleAnim}>
						<Circle />
						<h2>Request a call</h2>
					</Social>
				</Hide>
				<Hide>
					<Social variants={titleAnim}>
						<Circle />
						<h2>Social media</h2>
					</Social>
				</Hide>
			</div>
		</StyledContact>
	);
};

const StyledContact = styled(motion.div)`
	padding: 5rem 10rem;
	color: #353535;
	min-height: 90vh;
`;

const Title = styled.div`
	margin-bottom: 4rem;
	color: black;
`;

const Circle = styled.div`
	border-radius: 50%;
	width: 3rem;
	height: 3rem;
	background: #353535;
`;

const Social = styled(motion.div)`
	display: flex;
	align-items: center;
	h2 {
		margin: 2rem;
	}
`;

export default ContactUs;
