/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                dark: "#111119",
                primary: "#00ff94",
                main: "#ffffff",
                mainDark: "#606061",
            },
            fontFamily: {
                Roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
                RobotoCondensed: [
                    "Roboto Condensed",
                    ...defaultTheme.fontFamily.sans,
                ],
                mono: ["Roboto Mono", ...defaultTheme.fontFamily.mono],
            },
        },
    },
    plugins: [require("tailwindcss-magic")],
};