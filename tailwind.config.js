/** @type {import('tailwindcss').Config} */

const withMT = require('@material-tailwind/react/utils/withMT')
const plugin = require('tailwindcss/plugin')

module.exports = withMT({
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            screens: {
                xs: '375px',
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
                '2xl': '1440px',
                '3xl': '1512px',
                '4xl': '1728px',
            },
            colors: {
                'blue-01': '#333285',
                'blue-02': '#232541',
                'gray-01': '#DCDFE6',
                'gray-02': '#DCDFE6',
                'gray-03': '#F7F7F9',
                'orange-01': '#FCBD68',
                yellow: '#FFE382',
                blue: '#5F84FF',
                'collection-gradient':
                    'linear-gradient(180deg, #1C1C30 0%, rgba(28, 28, 48, 0.92) 14.28%, rgba(28, 28, 48, 0) 100%)',
                kote: '#1C1C30',
                dark: 'rgba(255, 255, 255, 0.15)',
                'white-light': 'rgba(255, 255, 255, 0.15)',
            },
            fontFamily: {
                Rubik: ['Rubik', 'sans'],
            },
            dropShadow: {
                priceShadow: '8px 8px 4px rgba(43, 45, 40, 0.47)',
                signupShadow: '0px 8px 8px rgba(0, 0, 0, 0.25)',
                newsShadow: '8px 8px 10px rgba(0, 0, 0, 0.1)',
                feedShadow: '5px 5px 2px rgba(0, 0, 0, 0.5)',
                tagShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            },
        },
    },
    plugins: [
        require('tailwind-scrollbar-hide'),
        require('@tailwindcss/typography'),
        plugin(function ({ addVariant }) {
            addVariant(
                'mobile-only',
                "@media screen and (max-width: theme('screens.md'))"
            ) // instead of hard-coded 640px use sm breakpoint value from config. Or anything
        }),
    ],
})
