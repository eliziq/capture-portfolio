import React from "react";
import styled from "styled-components";
import { Layout, Hide } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../pages/animation";

const FaqSection = () => {
	const [element, controls] = useScroll();
	return (
		<Hide>
			<Faq
				variants={scrollReveal}
				ref={element}
				animate={controls}
				initial="hidden"
			>
				<h2>
					Any questions? <span>FAQ</span>
				</h2>
				<AnimateSharedLayout>
					<Toggle title="How do I start?">
						<div className="answer">
							<p>Lorem ipsum dolor sit amet.</p>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Ducimus, tempore voluptate culpa at necessitatibus sed pariatur
								vitae tempora similique quas. Lorem ipsum dolor sit amet
								consectetur adipisicing elit. Repudiandae eligendi, ipsum
								tempore praesentium nihil omnis ut vitae! Perspiciatis, harum
								natus? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Facere aut id facilis. A quas amet praesentium neque optio,
								sequi odio.
							</p>
						</div>
					</Toggle>
					<Toggle title="What products do you offer?">
						<div className="answer">
							<p>Lorem ipsum dolor sit amet.</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Veritatis accusantium quibusdam quod! Optio blanditiis doloribus
								voluptatem, nulla eveniet accusantium ea aspernatur ratione
								eligendi, fuga magnam doloremque, corporis et sed magni vel?
								Quibusdam sequi, eaque expedita deserunt, repellat veritatis ea
								perspiciatis vel iusto provident laborum molestiae atque optio
								unde quidem maiores delectus ut obcaecati fugiat qui facilis
								quos reprehenderit a? Impedit itaque optio necessitatibus quo
								excepturi blanditiis voluptatibus a ex architecto earum quam,
								tempora, quae qui expedita iste error veritatis libero eaque,
								officiis adipisci repellendus modi! Adipisci, dolor reiciendis
								ducimus perspiciatis repellendus libero, deserunt odit omnis quo
								nemo, mollitia accusantium nesciunt!
							</p>
						</div>
					</Toggle>
					<Toggle title="Daily schedule">
						<div className="answer">
							<p>Lorem ipsum dolor sit amet.</p>
							<p>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
								tempora facilis iste blanditiis tenetur vitae.
							</p>
						</div>
					</Toggle>
					<Toggle title="Different payment metods">
						<div className="answer">
							<p>Lorem ipsum dolor sit amet.</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
								amet natus fugit numquam consequuntur esse magnam culpa ipsum
								vero. Numquam accusantium amet odit hic tempora veniam
								voluptatem, voluptatum velit vel vero quis placeat vitae, quia
								nesciunt enim quasi et explicabo ducimus unde dolor excepturi?
								Dicta itaque laborum placeat nisi praesentium!
							</p>
						</div>
					</Toggle>
				</AnimateSharedLayout>
			</Faq>
		</Hide>
	);
};

const Faq = styled(Layout)`
	display: block;
	span {
		display: block;
	}
	h2 {
		padding-bottom: 2rem;
		font-weight: lighter;
	}
	.faq-line {
		background: #ccc;
		height: 0.2rem;
		margin: 2rem 0rem;
		width: 100%;
	}
	.question {
		padding: 3rem 0rem;
		cursor: pointer;
	}
	.answer {
		padding: 2rem 0rem;
		p {
			padding: 1rem 0rem;
		}
	}
`;

export default FaqSection;
