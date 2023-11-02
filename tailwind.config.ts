import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'grey':'#F1F1F1',
        'type-low':'#626262',
        'type-high':'#171520',
        'primary':'#1B4B66',
        'primary-tint':'#639599',
        'highlight':'#ff8c4b',
        'dark':'#13101E',
        'bright':'#ffffff',
        'light-text':'#b6b6b6',
        'major-vibrant':'#FF404B'
      }
    },
  },
  plugins: [],
}
export default config
