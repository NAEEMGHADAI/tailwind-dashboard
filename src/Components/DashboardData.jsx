import React, { useState } from "react";
import { useStateContext } from "../context/ContextProvider";
import DashboardTable from "./DashboardTable";
import TableInDataFormat from "./TableInDataFormat";

const DashboardData = (props) => {
	const { screenSize } = useStateContext();
	const [isActive, setIsActive] = useState(0);
	const activeLink = `h-14  rounded-lg bg-slate-700 w-1/2`;
	const normalLink = `h-14 rounded-lg w-1/2`;

	return screenSize >= 1000 ? (
		<>
			<DashboardTable data={props.data1} />
			<DashboardTable data={props.data2} />
		</>
	) : (
		<>
			<h3 className="text-center text-white text-2xl font-bold mb-2">Market</h3>
			<div className={`flex gap-2 text-sm ml-4 mr-4`}>
				<button
					className={isActive === 0 ? activeLink : normalLink}
					onClick={() => setIsActive(0)}
				>
					Supply
				</button>
				<button
					className={isActive ? activeLink : normalLink}
					onClick={() => setIsActive(1)}
				>
					Borrow
				</button>
			</div>
			{isActive ? (
				<TableInDataFormat data={props.data2} />
			) : (
				<TableInDataFormat data={props.data1} />
			)}
		</>
	);
};

export default DashboardData;
