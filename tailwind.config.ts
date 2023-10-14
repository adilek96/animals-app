import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'en-flag': "url('../public/flags/enflag.svg')",
        'ru-flag': "url('../public/flags/ruflag.svg')",
        'az-flag': "url('../public/flags/azflag.svg')",
      },
      screens:{
        'sm': '336px',
      },
      colors: {
        primary: colors.orange,
      },
      backgroundSize: {
        '50%': '50%',
        '200%': '200%'
      },
      boxShadow:{
        'md-revers': '0 -3px 6px -1px rgb(0 0 0 / 0.1)'
      }

   
    },
  },
  plugins: [],
}
export default config
