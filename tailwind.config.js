/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          
          "primary": "#6b7280",
                   
          "secondary": "#4b5563",
                   
          "accent": "#6b7280",
                   
          "neutral": "#e5e7eb",
                   
          "base-100": "#ffffff",
                   
          "info": "#fbcfe8",
                   
          "success": "#36D399",
                   
          "warning": "#FBBD23",
                   
          "error": "#F87272",
                   },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
