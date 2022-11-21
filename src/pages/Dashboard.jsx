import React from "react";
import AccountInfo from "../Components/AccountInfo";
import ConnectWallet from "../Components/ConnectWallet";

import { useStateContext } from "../context/ContextProvider";

const Dashboard = () => {
	const { screenSize } = useStateContext();

	return (
		<>
			{screenSize >= 1000 ? null : (
				<div>
					<h2 className=" text-2xl text-white mb-2 ml-2 mr-2">Dashboard</h2>
				</div>
			)}

			<div
				className={` text-white flex flex-wrap gap-1 ${
					screenSize >= 1000 ? ` justify-around` : `flex-col ml-2 mr-2`
				}`}
			>
				<AccountInfo />
				<ConnectWallet />
			</div>
			<div
				className={` text-white flex flex-wrap gap-1 mt-5 ${
					screenSize >= 1000 ? ` justify-around` : `flex-col ml-2 mr-2`
				}`}
			></div>
		</>
	);
};

export default Dashboard;
