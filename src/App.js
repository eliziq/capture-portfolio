import React from "react";
import { Switch, Route } from "react-router-dom";
//import Pages
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import MovieDetail from "./pages/MovieDetail";
//Global Style
import GlobalStyle from "./components/GlobalStyle";

function App() {
	return (
		<div className="App">
			<GlobalStyle />
			<Nav />
			<Switch>
				<Route path="/" exact>
					<AboutUs />
				</Route>
				<Route path="/work" exact>
					<OurWork />
				</Route>
				{/* :id  - dynamic text */}
				<Route path="/work/:id">
					<MovieDetail />
				</Route>
				<Route path="/contact">
					<ContactUs />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
