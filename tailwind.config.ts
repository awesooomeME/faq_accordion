import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: 'hsl(0, 0%, 100%)',
        light_pink: 'hsl(275, 100%, 97%)',
        grayish_purple: 'hsl(292, 16%, 49%)',
        dark_purple: 'hsl(292, 42%, 14%)',
      },
      fontWeight: {
        normal: '400',
        heavy: '600',
        extra_heavy: '700'
      },
      backgroundImage: {
        mobile: "url('/background-pattern-mobile.svg')",
        desktop: "url('/background-pattern-desktop.svg')"
      }
    },
  },
  plugins: [],
}
export default config
