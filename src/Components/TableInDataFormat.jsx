import React from "react";

const TableInDataFormat = (props) => {
	let keys = Object.keys(props.data[0]);
	const list = (ele, k) => {
		if (k === "collateral") {
			return (
				<label className="inline-flex relative items-center cursor-pointer">
					<input type="checkbox" value="" className="sr-only peer" />
					<div className="w-11 h-6 bg-main-dark-bg peer-focus:outline-none peer-focus:ring-4  peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
				</label>
			);
		} else if (k === "liquidity") {
			return <p className="text-white pt-1">{`$ ${ele.liquidity}`}</p>;
		} else if (k === "wallet") {
			return <p className="text-white pt-1">{`${ele.wallet} ${ele.name}`}</p>;
		} else {
			if (ele[k].length === 2) {
				return (
					<div>
						<p className="text-white text-sm pt-1">{ele[k][0]}</p>
						<p className="text-slate-500 text-sm pt-1">{ele[k][1]}</p>
					</div>
				);
			}
			return <p className="text-sm text-white pt-1">{ele[k]}</p>;
		}
	};
	return props.data.map((ele, i) => (
		<div
			key={i}
			className={`bg-secondary-dark-bg h-fit rounded-xl mt-5 pr-4 pl-4 pt-6 pb-6 ml-4 mr-4`}
		>
			<h3 className="border-b-2 pb-2 text-white text-sm border-slate-600">
				{ele[keys[1]]}
			</h3>
			<div className="flex justify-between pt-4 text-white flex-wrap gap-16">
				{keys.map((k, i) =>
					i < 2 ? null : (
						<div key={k}>
							<h4 className="capitalize text-sm text-white">{k}</h4>
							{list(ele, k)}
						</div>
					)
				)}
			</div>
		</div>
	));
};

export default TableInDataFormat;
