import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      maxWidth: {
        app: '700px'
      }
    },
  },
  plugins: [],
}
export default config
