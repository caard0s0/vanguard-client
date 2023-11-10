import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '300px',
      // => @media (min-width: 300px) { ... }

      sm: '460px',
      // => @media (min-width: 460px) { ... }

      md: '600px',
      // => @media (min-width: 600px) { ... }

      lg: '760px',
      // => @media (min-width: 760px) { ... }

      xl: '900px',
      // => @media (min-width: 900px) { ... }
    },
    extend: {
      backgroundImage: {
        'dark-blue': 'linear-gradient(215deg, #171d26 15%, #000 85%)',
      },
      colors: {
        form: '#1c2026',
      },
    },
  },
  plugins: [],
}
export default config
