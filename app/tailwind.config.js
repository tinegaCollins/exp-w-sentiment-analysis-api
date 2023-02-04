/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
    // darkMode: 'class',
    content: ['./components/**/*.{js,vue,ts}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './nuxt.config.{js,ts}'],
    theme: {
        extend: {
            colors: {
                lightBrown: '#D79922',
                kindaPink: '#EFE1BA',
                tomatoRed: '#F13C1F',
                darkBlue: '#4056A1',
                lightBlue: '#C5CBE3',
                darkBg: '#0C0C0D',
                lightBg: '#F5F5F5',
                blueWhite: '#C9D2DA',
            },
        },
        screens: {
            xs: '400px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            xxl: '1536px',
        },
        plugins: [require('@tailwindcss/line-clamp')],
    },
}
