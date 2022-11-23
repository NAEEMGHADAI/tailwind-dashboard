import React, { useState } from "react";
import { BsInfoCircle } from "react-icons/bs";
import { useStateContext } from "../context/ContextProvider";

const ConnectWallet = () => {
	const { screenSize } = useStateContext();
	const [isActive, setIsActive] = useState(0);
	const activeLink = `h-14  rounded-lg bg-slate-700 ${
		screenSize >= 570 ? `w-24` : `w-1/2`
	}`;
	const normalLink = `h-14 w-24 rounded-lg ${
		screenSize >= 570 ? `w-24` : `w-1/2`
	}`;
	return (
		<div
			className={`bg-secondary-dark-bg h-auto rounded-2xl ml-4 mr-4 pr-4 pl-4 pt-6 pb-6 flex-wrap ${
				screenSize >= 1000 ? `w-2/5` : `mt-10`
			}`}
		>
			<div
				className={`flex  text-white ${
					screenSize >= 570 ? `justify-between` : `flex-col gap-3`
				}`}
			>
				<div>
					<h2 className="mt-3 text-xl font-bold">Mint/Repay VAI</h2>
				</div>
				<div className={`flex gap-2 text-sm`}>
					<button
						className={isActive === 0 ? activeLink : normalLink}
						onClick={() => setIsActive(0)}
					>
						Mint VAI
					</button>
					<button
						className={isActive ? activeLink : normalLink}
						onClick={() => setIsActive(1)}
					>
						Repay VAI
					</button>
				</div>
			</div>
			<div className=" h-14 rounded-xl bg-info mt-10">
				<p className="text-sm pl-3 pt-4 flex gap-1">
					<BsInfoCircle className="mt-1 mr-2" color="#3258AF" /> Please connect
					your wallet to {isActive ? " Repay VAI" : "Mint VAI"}
				</p>
			</div>
			<div>
				<button className="w-full mt-10 hover:bg-blue-800 pt-2 pb-2 rounded-lg border-2  border-blue-800">
					Connect Wallet
				</button>
			</div>
		</div>
	);
};

export default ConnectWallet;
