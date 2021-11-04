import React from "react";
import home1 from "../img/home1.png";
//Styled Components
import { Layout, Description, Image, Hide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../pages/animation";
//Wawe
import Wawe from "./Wawe";

const AboutSection = () => {
	return (
		<Layout>
			<Description>
				<motion.div>
					<Hide>
						<motion.h2 variants={titleAnim}>We work to make</motion.h2>
					</Hide>
					<Hide>
						<motion.h2 variants={titleAnim}>
							your <span>dreams</span>
						</motion.h2>
					</Hide>
					<Hide>
						<motion.h2 variants={titleAnim}>come true.</motion.h2>
					</Hide>
				</motion.div>
				<motion.p variants={fade}>
					Contact us for every photography or videography idead that you have.
					We have professionals with amazing skills to help you achieve it.
				</motion.p>
				<motion.button variants={fade}>Contact Us</motion.button>
			</Description>
			<Image>
				<motion.img variants={photoAnim} src={home1} alt="guy with a camera" />
			</Image>
			<Wawe />
		</Layout>
	);
};

export default AboutSection;
