import type { Config } from 'tailwindcss'
import sharedConfig from '@shared/styles/tailwind.config'

const config: Config = {
  ...sharedConfig,
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    '../../shared/ui/**/*.{js,ts,jsx,tsx}',
  ],
}

export default config
