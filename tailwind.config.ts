import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4CAF50',       // Verde suave
        secondary: '#03A9F4',     // Azul claro
        accent: '#FFEB3B',        // Amarillo brillante
        neutral: '#8D6E63',       // Marrón claro
        dark: '#212121',          // Gris oscuro
        lightGray: '#9E9E9E',     // Gris claro
      },
    },
  },
  plugins: [],
};
export default config;
