module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontFamily: {
			display: ["Open Sans", "sans-serif"],
			body: ["Open Sans", "sans-serif"],
		},

		extend: {
			backgroundColor: {
				"main-bg": "#FAFBFB",
				"main-dark-bg": "#1F2028",
				"secondary-dark-bg": "#282931",
				info: "#24252E",
			},
		},
	},
	plugins: [],
};
