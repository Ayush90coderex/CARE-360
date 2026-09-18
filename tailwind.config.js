/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Care360 Light-Green Healthcare Design Tokens
        care: {
          primary: '#2E8B57',
          light: '#E8F5E9',
          verylight: '#F3FAF4',
          accent: '#66BB6A',
          dark: '#1B5E20',
          success: '#43A047',
          white: '#FFFFFF',
          gray: '#F5F7F6',
          text: '#263238',
          muted: '#607D6B',
          border: '#D7E8DB'
        },
        // Health aliases mapped directly to the Care360 light-green palette
        health: {
          primary: '#2E8B57',
          medical: '#1B5E20',
          teal: '#2E8B57',
          lightteal: '#E8F5E9',
          bg: '#F3FAF4',
          card: '#FFFFFF',
          green: '#43A047',
          yellow: '#EAB308',
          orange: '#F97316',
          red: '#DC2626'
        },
        mohfw: {
          dark: '#1B5E20',
          navy: '#2E8B57',
          lightnavy: '#388E3C',
          teal: '#2E8B57',
          lightteal: '#E8F5E9',
          pale: '#F3FAF4',
          accent: '#66BB6A',
          amber: '#D97706',
          red: '#DC2626',
          green: '#43A047',
          slate: '#263238'
        }
      },
      boxShadow: {
        'card': '0 1px 3px rgba(46, 139, 87, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 6px 16px rgba(46, 139, 87, 0.10), 0 2px 4px rgba(0, 0, 0, 0.04)',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'Segoe UI', 'Roboto', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}
