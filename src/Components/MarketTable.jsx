import React, { useState } from "react";
import { MarketData } from "../data/dummy";

const MarketTable = (props) => {
	const [data, setData] = useState(MarketData);

	return (
		<div
			className={`overflow-x-auto relative  shadow-md rounded-lg w-11/12 ml-12 mt-6`}
		>
			<table className="w-full text-sm text-left bg-secondary-dark-bg  text-gray-400">
				<caption className="p-5 text-lg font-semibold text-left  text-white bg-secondary-dark-bg">
					{data[0].title}
				</caption>
				<thead className="text-xs  uppercase bg-secondary-dark-bg text-gray-400">
					<tr>
						<th scope="col" className="py-3 px-6">
							Asset
						</th>
						<th scope="col" className="py-3 px-6">
							<div className="flex items-center">
								Total Supply
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
								Supply APY
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
								Total Borrow
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
								Borrow APY
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
								Liquidity
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
								Collateral F.
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
								Price
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
							className=" border-b bg-secondary-dark-bg border-gray-700 hover:bg-gray-600"
						>
							<th
								scope="row"
								className="py-4 px-6 font-medium pt-6 pb-6 text-xl whitespace-nowrap text-white"
							>
								{ele.name}
							</th>
							<td className="py-4 px-6">
								<span className="text-white text-lg">{ele.totalSupply[0]}</span>
								<br />
								<span>{ele.totalSupply[1]}</span>
							</td>
							<td className="py-4 px-6">
								<span className="text-white text-lg">{ele.supplyApy[0]}</span>
								<br />
								<span>{ele.supplyApy[1]}</span>
							</td>
							<td className="py-4 px-6">
								<span className="text-white text-lg">{ele.totalBorrow[0]}</span>
								<br />
								<span>{ele.totalBorrow[1]}</span>
							</td>
							<td className="py-4 px-6">
								<span className="text-white text-lg">{ele.borrowApy[0]}</span>
								<br />
								<span>{ele.borrowApy[1]}</span>
							</td>
							<td className="py-4 px-6">
								<span className="text-white text-lg">{ele.liquidity}</span>
							</td>
							<td className="py-4 px-6">
								<span className="text-white text-lg">{ele.collateralF}</span>
							</td>
							<td className="py-4 px-6">
								<span className="text-white text-lg">{ele.Price}</span>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default MarketTable;
