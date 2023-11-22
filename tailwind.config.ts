/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      minHeight:{
        homeMobile: 'calc(100vh - 180px)',
        homeDesktop: 'calc(100vh - 116px)',
        bgAbout: 'calc(100% - 400px)'
      },
      backgroundImage: {
        "bg-about-deskstop": "url('/images/bg-about-desktop.png')",
        "bg-about-mobile": "url('/images/bg-about-mobile.png')",
        "bg-about-image-mobile": "url('/images/bg-image-about.png')",
        "bg-about-image-desktop": "url('/images/image-about-desktop.png')",
        "bg-request": "url('/images/bg-request.png')",
      },
      backgroundSize: {
        "full": '100%',
      },
      screens: {
        tabletSM: '600px',
        tabletMD: '768px',
        tabletLG: '950PX',
        laptopSM: '1070px',
        laptopMD: '1330PX',
        laptopLG: '1440px',
      },
      fontFamily: {
        primary: ['var(--font-poppins)'],
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

