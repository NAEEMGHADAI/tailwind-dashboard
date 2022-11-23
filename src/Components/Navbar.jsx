import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useStateContext } from "../context/ContextProvider";
import logo2 from "../data/logo-2.PNG";

const Navbar = () => {
	const { activeMenu, setActiveMenu, screenSize, setScreenSize, pageName } =
		useStateContext();

	useEffect(() => {
		const handleResize = () => setScreenSize(window.innerWidth);
		window.addEventListener("resize", handleResize);
		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, [setScreenSize]);
	useEffect(() => {
		if (screenSize <= 1000) {
			setActiveMenu(false);
		} else {
			setActiveMenu(true);
		}
	}, [screenSize, setActiveMenu]);
	return (
		<div className="flex justify-between text-white pt-4 pb-4 sm:pt-10 pl-5 pr-5 sm:pb-5 md:ml-6 md:mr-6 relative">
			{screenSize <= 1000 && !activeMenu ? (
				<img src={logo2} alt="" width="50" height="50" />
			) : (
				<h1 className="text-2xl capitalize">{pageName}</h1>
			)}
			<button className="bg-blue-600 text-white rounded-xl  hover:bg-blue-800 w-full mr-8 ml-8 md:w-36 md:pt-3 md:pb-3   relative">
				Connect Wallet
			</button>
			{screenSize <= 1000 && !activeMenu ? (
				<button
					onClick={() =>
						setActiveMenu((prev) => {
							console.log(prev);
							return !prev;
						})
					}
				>
					<span className="absolute inline-flex rounded-full h-5 w-5 right-2" />
					<AiOutlineMenu size={35} />
				</button>
			) : null}
		</div>
	);
};

export default Navbar;
