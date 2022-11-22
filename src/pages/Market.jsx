import React from "react";
import MarketHeadline from "../Components/MarketHeadline";
import MarketTable from "../Components/MarketTable";
import TableInDataFormat from "../Components/TableInDataFormat";
import { MarketData } from "../data/dummy";
import { useStateContext } from "../context/ContextProvider";

const Market = () => {
	const { screenSize } = useStateContext();
	return (
		<div>
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
