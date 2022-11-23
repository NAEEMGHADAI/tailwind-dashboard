import React from "react";
import {
	MarketHeadline,
	MarketTable,
	TableInDataFormat,
} from "../Components/index";
import { MarketData } from "../data/dummy";
import { useStateContext } from "../context/ContextProvider";

const Market = () => {
	const { screenSize } = useStateContext();
	return (
		<div>
			{screenSize >= 1000 ? null : (
				<div>
					<h2 className=" text-2xl text-white mb-2 ml-5">Market</h2>
				</div>
			)}
			<MarketHeadline />
			{screenSize > 1300 ? (
				<MarketTable />
			) : (
				<TableInDataFormat data={MarketData} />
			)}
		</div>
	);
};

export default Market;
