/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        graphite: '#0A0B0E',
        surface: '#15171B',
        surface2: '#1D2024',
        paper: '#EDEAE1',
        gold: '#C9A24B',
        signal: '#5B8CA8',
        muted: '#7A8088',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      letterSpacing: {
        widest2: '0.35em',
      },
    },
  },
  plugins: [],
}
