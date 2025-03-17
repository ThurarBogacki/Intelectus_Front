/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'gradient-radial-small': 'radial-gradient(ellipse 600px 400px at center 38%, rgba(0, 255, 243, 0.3) 10%, rgba(23, 23, 23, 0.8) 90%)',
      },
      screens:  {
        'md2' : '1000px',
        'md3' : '600px',
      }
    },
  },
  plugins: [],
  corePlugins: {
    filter: true,
  }
};
