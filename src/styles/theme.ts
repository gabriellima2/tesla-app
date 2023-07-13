export type Theme = typeof theme;

export const theme = {
	colors: {
		main: "#27292D",
		text: {
			primary: "#EEEEEE",
			secondary: "#7F8493",
		},
		utils: {
			shadow: {
				dark: "#000000",
				light: "#FFFFFF",
			},
			elements: {
				primary: "#101113",
				secondary: "#2B2F33",
				tertiary: "#2A2D31",
			},
		},
		gradients: {
			background: {
				from: "#2A2D32",
				to: "#131313",
			},
			brand: {
				from: "#2FB8FF",
				to: "#9EECD9",
			},
		},
	},
	fontFamily: {
		main: {
			regular: "Rubik_400Regular",
			semibold: "Rubik_600SemiBold",
			bold: "Rubik_700Bold",
		},
	},
	fontSizes: {
		sm: "13px",
		regular: "17px",
		medium: "20px",
		xl: "28px",
		"2xl": "34px",
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
	rounded: {
		1: "20px",
		2: "40px",
	},
};
