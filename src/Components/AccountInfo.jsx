import React, { useState } from "react";
import { BsInfoCircle } from "react-icons/bs";
import { useStateContext } from "../context/ContextProvider";

const AccountInfo = () => {
	const { screenSize } = useStateContext();
	const [toggle, setToggle] = useState(true);
	const toggleClass = " transform translate-x-6";
	return (
		<div
			className={` bg-secondary-dark-bg h-fit rounded-2xl pr-4 pl-4 pt-6 pb-6 ${
				screenSize >= 1000 ? ` w-5/12` : ` ml-4 mr-4`
			}`}
		>
			<div className="flex justify-between">
				<h2 className={`font-bold ${screenSize >= 400 ? `text-xl` : ``}`}>
					My Account
				</h2>

				<label className="inline-flex relative items-center cursor-pointer">
					<span className="text-sm font-medium  text-gray-300 flex gap-1 mr-1">
						<BsInfoCircle className="mt-1 mr-1" />
						APY with XVS
					</span>
					<div
						className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-main-dark-bg rounded-full p-1 cursor-pointer"
						onClick={() => {
							setToggle(!toggle);
						}}
					>
						<div
							className={
								" bg-button-color md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out" +
								(toggle ? null : toggleClass)
							}
						></div>
					</div>
				</label>
			</div>
			<div>
				<div className="mt-5">
					<p className="flex gap-2">
						Net APY <BsInfoCircle className="mt-1" />
					</p>
					<h1 className="ml-1 text-4xl font-bold text-green-400">0%</h1>
				</div>
			</div>
			<div
				className={`flex mt-5 flex-wrap ${
					screenSize >= 1000 ? ` gap-10 ` : `flex-col`
				}`}
			>
				<div
					className={` ${
						screenSize >= 1000
							? `border-r-2 border-slate-600 pr-5`
							: `flex justify-between`
					}`}
				>
					<p className=" text-slate-600 text-sm">Daily earnings</p>
					<h5 className=" text-lg">$0.00</h5>
				</div>
				<div
					className={`${
						screenSize >= 1000
							? `border-r-2 border-slate-600 pr-5`
							: `flex justify-between`
					}`}
				>
					<p className="text-slate-600 text-sm">Supply balance</p>
					<h5 className=" text-lg">$0.00</h5>
				</div>
				<div className={`${screenSize >= 1000 ? `` : `flex justify-between`}`}>
					<p className="text-slate-600 text-sm">Borrow balance</p>
					<h5 className=" text-lg">$0.00</h5>
				</div>
			</div>
			<div>
				<div className="flex justify-between mt-5">
					<div className={`flex ${screenSize >= 1000 ? "gap-2" : "flex-col"} `}>
						<p className="text-slate-600">Borrow limit used:</p>
						<p className="flex gap-2">
							0% <BsInfoCircle className="mt-1" />
						</p>
					</div>
					<div className={`flex ${screenSize >= 1000 ? "gap-2" : "flex-col"} `}>
						<p className="text-slate-600">Limit:</p>
						<p>0%</p>
					</div>
				</div>
				<div className="mt-5">
					<input
						id="small-range"
						type="range"
						defaultValue="80"
						className="w-full h-1 mb-6  rounded-lg appearance-none cursor-pointer range-sm bg-gray-700"
					></input>
					<div className="flex justify-end">
						<p>
							<span className=" text-slate-600 mr-2">Your Safe limit: </span>
							$0.00
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AccountInfo;
