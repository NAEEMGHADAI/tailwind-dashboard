import React from "react";
import { maketHeadline } from "../data/dummy";
import { useStateContext } from "../context/ContextProvider";

const MarketHeadline = () => {
	const { screenSize } = useStateContext();
	return screenSize > 1300 ? (
		<div
			className={`bg-secondary-dark-bg h-fit rounded-2xl  ml-12 mr-14 pt-1 pb-1`}
		>
			<div className="flex gap-5 mt-3 mb-3 flex-wrap">
				{maketHeadline.map((ele, i) => (
					<div
						className={`text-white p-6 ${
							i === 3 ? "" : "border-r-2 border-slate-600"
						}`}
					>
						<h2 className="text-slate-600">{ele.title}</h2>
						<h4 className="text-2xl">{`$${ele.value}`}</h4>
					</div>
				))}
			</div>
		</div>
	) : (
		<>
			<div
				className={`flex mr-5 ml-5 ${
					screenSize > 1000 ? "flex-row gap-4" : "flex-col gap-2"
				}`}
			>
				{maketHeadline.map((ele, i) =>
					i < 2 ? (
						<div
							className={`bg-secondary-dark-bg h-fit rounded-2xl pt-5 pb-5 pl-3 pr-3" ${
								screenSize > 1000 ? "w-1/2" : "w-full"
							}`}
						>
							<h2 className="text-slate-600 text-sm">{ele.title}</h2>
							<h4 className="text-xl text-white">{`$${ele.value}`}</h4>
						</div>
					) : null
				)}
			</div>
			<div
				className={`flex mt-2 mr-5 ml-5 ${
					screenSize > 1000 ? "flex-row gap-2" : "flex-col gap-4"
				}`}
			>
				{maketHeadline.map((ele, i) =>
					i >= 2 ? null : (
						<div
							className={`bg-secondary-dark-bg h-fit rounded-2xl pt-5 pb-5 pl-3 pr-3 " ${
								screenSize > 1000 ? "w-1/2" : "w-full"
							}`}
						>
							<h2 className="text-slate-600 text-sm">{ele.title}</h2>
							<h4 className="text-xl text-white">{`$${ele.value}`}</h4>
						</div>
					)
				)}
			</div>
		</>
	);
};

export default MarketHeadline;
