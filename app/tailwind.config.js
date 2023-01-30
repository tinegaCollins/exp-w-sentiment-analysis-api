/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
	content: ["./components/**/*.{js,vue,ts}", "./layouts/**/*.vue", "./pages/**/*.vue", "./plugins/**/*.{js,ts}", "./nuxt.config.{js,ts}"],
	theme: {
		extend: {},
		screens: {
			xs: "400px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
	},
	darkMode: "class",
	plugins: [require("@tailwindcss/line-clamp")],
};
