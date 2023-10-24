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
