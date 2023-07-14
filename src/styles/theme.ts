export type Theme = typeof theme;

export const theme = {
	colors: {
		main: "#27292D",
		text: {
			primary: "#FDFDFD",
			secondary: "#7F8489",
		},
		utils: {
			highlight: "#ffffff",
			shadow: {
				dark: "#1F2427",
				light: "#485057",
			},
			elements: {
				primary: "#2C3036",
				secondary: "#31343C",
			},
		},
		gradients: {
			background: {
				from: "#353A40",
				to: "#16171B",
			},
			brand: {
				from: "#005EA3",
				to: "#11A8FD",
			},
		},
	},
	fontFamily: {
		main: {
			regular: "Lato_400Regular",
			bold: "Lato_700Bold",
			black: "Lato_900Black",
		},
		secondary: {
			extralight: "Jost_200ExtraLight",
		},
	},
	fontSizes: {
		regular: "18px",
		medium: "24px",
		xl: "50px",
	},
	spaces: {
		1: "4px",
		2: "8px",
		3: "12px",
		4: "16px",
		5: "20px",
		6: "24px",
		7: "28px",
		8: "32px",
		9: "36px",
		10: "40px",
	},
};
