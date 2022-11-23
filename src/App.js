import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ReactTooltip from "react-tooltip";
// import { FiSettings } from "react-icons/fi";
import "./App.css";
import { Dashboard, Market } from "./pages/index";
import { Sidebar, Navbar, Footer } from "./Components/index";

import { useStateContext } from "./context/ContextProvider";

function App() {
	const { activeMenu, screenSize } = useStateContext();
	return (
		<div>
			<BrowserRouter>
				<div className="flex relative bg-main-dark-bg ">
					{/* <div className="fixed right-4 bottom-4" style={{ zIndex: 1000 }}>
						<ReactTooltip place="top" id="settings" effect="solid">
							Settings
						</ReactTooltip>
						<button
							type="button"
							data-for="settings"
							data-tip
							className="text-3xl p-3 text-white hover:drop-shadow-xl hover:bg-light-gray "
							style={{ background: "blue", borderRadius: "50%" }}
						>
							<FiSettings />
						</button>
					</div> */}
					{activeMenu ? (
						<div className="w-full md:w-48 fixed sidebar bg-secondary-dark-bg">
							<Sidebar />
						</div>
					) : (
						<div className="w-0 bg-secondary-dark-bg ">
							<Sidebar />
						</div>
					)}
					<div
						className={`bg-main-dark-bg  min-h-screen w-full ${
							activeMenu ? "md:ml-48" : "flex-2"
						}`}
					>
						<div className="fixed md:static  bg-main-dark-bg navbar w-full">
							<Navbar />
						</div>

						<div className={screenSize <= 786 ? "mt-28 mb-20" : "mt-5 mb-20"}>
							<Routes>
								<Route path="/" element={<Dashboard />} />
								<Route path="/dashboard" element={<Dashboard />} />
								<Route path="/market" element={<Market />} />
							</Routes>
						</div>
						<div className="fixed bottom-0 text-white bg-main-dark-bg h-14 navbar w-full">
							<Footer />
						</div>
					</div>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
