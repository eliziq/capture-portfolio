import React from "react";
import styled from "styled-components";
import { Layout } from "../styles";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "./animation";

const ContactUs = () => {
	return (
		<motion.div
			variants={pageAnimation}
			initial="hidden"
			animate="show"
			exit="exit"
			className="contact-us"
		>
			<h1>Contact Us</h1>
		</motion.div>
	);
};

const StyledContact = styled(Layout)`
	//code
`;

export default ContactUs;
