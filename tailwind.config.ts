import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        line: "url('/src/assets/linha.png')",
        notebook: "url('/src/assets/notebook.png')",
        about: "url('/src/assets/bg-about.png')",
      },
      screens: {
        tablet: '850px',
      },
      fontFamily: {
        primary: 'Poppins, sans-serif',
      },
      colors:{
        'yellow-500': '#DE901B',
        'yellow-800': '#B66C00',
        'nord-neutral-30': '#333B47',
        'nord-neutral-10': '#161616',
        'nord-neutral-00': '#000000',
        'white-400': '#D9D9D9',
        'bg-secundary': '#242424'
      }
    },
  },
  plugins: [],
}
export default config
