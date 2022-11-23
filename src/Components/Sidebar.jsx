import React from "react";
import { Link, NavLink } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import { AiOutlineClose } from "react-icons/ai";
import { links } from "../data/dummy";
import { useStateContext } from "../context/ContextProvider";

import logo from "../data/logo.PNG";

export default function Sidebar() {
	const { activeMenu, setActiveMenu, screenSize, setPageName } =
		useStateContext();
	const activeLink =
		"flex item-center gap-5 pl-4 pt-3 pb-2.5 rounded-md text-white bg-active-link-bg text-md border-l-4 border-blue-700 mt-2 mb-2";
	const normalLink =
		"flex item-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-200 hover:bg-active-link-bg mt-2 mb-2";

	const handleCloseSideBar = (title) => {
		if (activeMenu && screenSize <= 1000) {
			setActiveMenu((prev) => {
				return !prev;
			});
		}
		if (typeof title === "string") {
			setPageName(title);
		}
	};
	return (
		<div className="h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
			{activeMenu && (
				<>
					<div className="flex justify-between items-center">
						<Link
							to="/"
							className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight text-white text-slate-1000"
						>
							<img src={logo} alt="" width="200" height="200" />
						</Link>
						<ReactTooltip place="bottom" id="close" effect="solid">
							Close
						</ReactTooltip>
						<button
							type="button"
							onClick={handleCloseSideBar}
							className="text-xl rounded-full p-3 hover:bg-slate-600 mt-4 block md:hidden text-white"
						>
							<AiOutlineClose />
						</button>
					</div>
					<div className="mt-10">
						{links.map((items) => (
							<NavLink
								to={`/${items.link}`}
								key={items.title}
								onClick={() => handleCloseSideBar(items.title)}
								className={({ isActive }) =>
									isActive ? activeLink : normalLink
								}
							>
								{items.icon}
								<span className="capitalize">{items.title}</span>
							</NavLink>
						))}
					</div>
				</>
			)}
		</div>
	);
}
