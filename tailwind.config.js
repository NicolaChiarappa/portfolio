/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F2EFEA",
        deepblue: "#02010A",
        brightred: "#F72C25",
        oceanblue: "#0077B6",
      },
      fontSize: {
        h1: "11.0875rem",
        h2: "6.85625rem",
        h3: "4.2375rem",
        p1: "2.61875rem",
        p2: "1.61875rem",
        p3: "1rem",
        p4: "0.61875rem",
        p5: "0.38125rem",
        // Aggiungi altre dimensioni per il testo secondo necessità
      },
      fontWeight: {
        h: "900",
        p: "500",
        // Aggiungi altri pesi del carattere secondo necessità
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        // Aggiungi altri font secondo necessità
      },
    },
  },
  plugins: [require("daisyui")],
};
