/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'navy-blue': '#002C55',
            },
            screens: {
                '3xl': '1920px', 
            },
            fontSize: {
                '2xs': '.65rem',
            },
        },
    },
    plugins: [],
}

