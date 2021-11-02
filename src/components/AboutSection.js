import React from "react";
import home1 from "../img/home1.png";
//Styled Components
import { Layout, Description, Image, Hide } from "../styles";

const AboutSection = () => {
	return (
		<Layout>
			<Description>
				<div className="title">
					<Hide>
						<h2>We work to make</h2>
					</Hide>
					<Hide>
						<h2>
							your <span>dreams</span>
						</h2>
					</Hide>
					<Hide>
						<h2>come true.</h2>
					</Hide>
					<p>
						Contact us for every photography or videography idead that you have.
						We have professionals with amazing skills to help you achieve it.
					</p>
					<button>Contact Us</button>
				</div>
			</Description>
			<Image>
				<img src={home1} alt="guy with a camera" />
			</Image>
		</Layout>
	);
};

export default AboutSection;
