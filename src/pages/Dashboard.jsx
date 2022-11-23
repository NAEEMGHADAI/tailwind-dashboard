import React from "react";
import { AccountInfo, ConnectWallet, DashboardData } from "../Components/index";

import { supplyMarketData, borrowMarket } from "../data/dummy";
import { useStateContext } from "../context/ContextProvider";

const Dashboard = () => {
	const { screenSize } = useStateContext();

	return (
		<>
			{screenSize >= 1000 ? null : (
				<div>
					<h2 className=" text-2xl font-bold text-white mb-2 ml-5">
						Dashboard
					</h2>
				</div>
			)}

			<div
				className={` text-white flex flex-wrap  ${
					screenSize >= 1000 ? ` justify-around` : `flex-col ml-2 mr-2`
				}`}
			>
				<AccountInfo />
				<ConnectWallet />
			</div>
			<div
				className={` text-white flex flex-wrap gap-1 mt-20 ${
					screenSize >= 1000 ? ` justify-around` : `flex-col ml-2 mr-2`
				}`}
			>
				<DashboardData data1={supplyMarketData} data2={borrowMarket} />
			</div>
		</>
	);
};

export default Dashboard;
