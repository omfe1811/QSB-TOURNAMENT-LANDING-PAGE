export default {
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	mode: "jit",
	theme: {
		extend: {
			colors: {
				darkPurple: "var(--color-darkPurple, #32146a)",
				darkestPurple: "var(--color-darkestPurple, #180a34ff)",
				vibrantOrange: "var(--color-vibrantOrange, #f75c03)",
				teaGreen: "var(--color-teaGreen, #d0e3c4)",
				magenta: "var(--color-magenta, #c45ab3)",
				lightPink: "var(--color-lightPink, #ffe5ea)",
			},
			fontFamily: {
				hagridItalic: ['"Hagrid Text Extrabold Italic"', "sans-serif"],
				hagrid: ['"Hagrid Text Extrabold"', "sans-serif"],
				hagridRegular: ['"Hagrid Regular"', "sans-serif"],
				hagridAltItalic: ['"Hagrid Italic"', "sans-serif"],
				alba: ['"Alba Regular"', "sans-serif"],
				albaSuper: ['"Alba Super"', "sans-serif"],
				albaModern: ['"Alba Modern"', "sans-serif"],
				royalacid: ['"Royalacid"', "cursive"],
				royalacidOutline: ['"Royalacid Outline"', "cursive"],
				allstar: ['"All Star Resort"', "cursive"],
				neon: ['"Neon"', "cursive"],
			},
		},
	},
	plugins: [],
};
