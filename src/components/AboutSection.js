import React from "react";
import home1 from "../img/home1.png";
//Styled Components
import { Layout, Description, Image, Hide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";

const AboutSection = () => {
	//Animation variants
	const titleAnim = {
		hidden: { opacity: 0 },
		show: { opacity: 1, transition: { duration: 2 } },
	};
	const container = {
		hidden: { x: 100 },
		show: {
			x: 0,
			transition: { duration: 1, ease: "easeOut", staggerChildren: 1 },
		},
	};

	return (
		<Layout>
			<Description>
				<motion.div
					variants={container}
					initial="hidden"
					animate="show"
					className="title"
				>
					{" "}
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
				<p>
					Contact us for every photography or videography idead that you have.
					We have professionals with amazing skills to help you achieve it.
				</p>
				<button>Contact Us</button>
			</Description>
			<Image>
				<img src={home1} alt="guy with a camera" />
			</Image>
		</Layout>
	);
};

export default AboutSection;
