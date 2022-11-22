import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
	const [activeMenu, setActiveMenu] = useState(true);
	const [screenSize, setScreenSize] = useState(undefined);
	const [pageName, setPageName] = useState("Dashboard");
	return (
		<StateContext.Provider
			value={{
				activeMenu,
				setActiveMenu,
				screenSize,
				setScreenSize,
				pageName,
				setPageName,
			}}
		>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);
