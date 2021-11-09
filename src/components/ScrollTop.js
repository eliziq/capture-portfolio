import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
	const { pathname } = useLocation();
	useEffect(() => {
		window.scroll({
			top: 0,
			left: 0,
		});
		//run everytime when pathname changes
	}, [pathname]);
	return null;
};

export default ScrollTop;
