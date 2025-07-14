const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
    mode: 'jit',
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index/*'],
	darkMode: false,
    theme: {
        extend:{
            colors:{
                primary: '#202225',
                secondary: '#5865f2',
                gray: colors.trueGray,
            },
        },
	},

	plugins: [require("tailwindcss-animated")],
};