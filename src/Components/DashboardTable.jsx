import React, { useState } from "react";
import { useStateContext } from "../context/ContextProvider";

const DashboardTable = (props) => {
	const [data, setData] = useState(props.data);

	const toggleClass = " transform translate-x-6";
	const { screenSize } = useStateContext();

	const ToggleItem = () => {
		const [toggle, setToggle] = useState(true);
		return (
			<label className="inline-flex relative items-center cursor-pointer">
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
		);
	};

	return (
		<div
			className={`overflow-x-auto relative shadow-md rounded-lg ${
				screenSize >= 900 ? "w-2/5" : "w-full"
			}`}
		>
			<table className="w-full text-sm text-left text-gray-400">
				<caption className="p-5 text-lg font-semibold text-left text-white bg-secondary-dark-bg">
					{data[0].title}
				</caption>
				<thead className="text-xs uppercase bg-secondary-dark-bg text-gray-400">
					<tr>
						<th scope="col" className="py-3 px-6">
							Asset
						</th>
						<th scope="col" className="py-3 px-6">
							<div className="flex items-center">
								APY
								<p onClick={() => setData(data.sort((a, b) => a.apy - b.apy))}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="ml-1 w-3 h-3"
										aria-hidden="true"
										fill="currentColor"
										viewBox="0 0 320 512"
									>
										<path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
									</svg>
								</p>
							</div>
						</th>
						<th scope="col" className="py-3 px-6">
							<div className="flex items-center">
								Wallet
								<a href="/">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="ml-1 w-3 h-3"
										aria-hidden="true"
										fill="currentColor"
										viewBox="0 0 320 512"
									>
										<path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
									</svg>
								</a>
							</div>
						</th>
						<th scope="col" className="py-3 px-6">
							<div className="flex items-center">
								Collateral
								<a href="/">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="ml-1 w-3 h-3"
										aria-hidden="true"
										fill="currentColor"
										viewBox="0 0 320 512"
									>
										<path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
									</svg>
								</a>
							</div>
						</th>
					</tr>
				</thead>
				<tbody>
					{data.map((ele) => (
						<tr
							key={ele.name}
							className=" border-b bg-secondary-dark-bg border-gray-700  hover:bg-gray-600"
						>
							<th
								scope="row"
								className="py-4 px-6 font-medium pt-6 pb-6  whitespace-nowrap text-white"
							>
								{ele.name}
							</th>
							<td className="py-4 px-6">{ele.apy}</td>
							<td className="py-4 px-6">{`0 ${ele.name}`}</td>
							<td className="py-4 px-6">
								{ele.liquidity ? `$ ${ele.liquidity}` : <ToggleItem />}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default DashboardTable;
