import React from "react";
import {
	AiOutlineMedium,
	AiOutlineTwitter,
	AiOutlineGithub,
} from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="flex justify-end sm:mr-60 mt-2">
			<div className="flex">
				<p className="text-sm w-fit mt-2 pr-2">
					<span className="text-slate-600">Latest Block:</span> 23303062
				</p>

				<div className="flex justify-around w-48 mt-2">
					<div className="">
						<Link to="https://medium.com/@Venus_protocol">
							<AiOutlineMedium
								size="20"
								className="pt-1 bg-secondary-dark-bg"
							/>
						</Link>
					</div>
					<div>
						<Link to="https://discord.com/invite/pTQ9EBHYtF">
							<FaDiscord size="20" className="pt-1 bg-secondary-dark-bg" />
						</Link>
					</div>
					<div>
						<Link to="https://twitter.com/VenusProtocol">
							<AiOutlineTwitter
								size="20"
								className="pt-1 bg-secondary-dark-bg"
							/>
						</Link>
					</div>
					<div>
						<Link to="https://github.com/VenusProtocol/">
							<AiOutlineGithub
								size="20"
								className="pt-1 bg-secondary-dark-bg"
							/>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
