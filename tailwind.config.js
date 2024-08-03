/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors : { 
      "m-primary" : "#222831",
      "m-secondary" : "#31363F",
      "m-accent" : "#76ABAE",
      "m-neutral" : "#EEEEEE"
    },

  },
  plugins: [],
}

