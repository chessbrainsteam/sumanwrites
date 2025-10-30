
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1f2937"
      },
      maxWidth: {
        prose: "72ch"
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config
