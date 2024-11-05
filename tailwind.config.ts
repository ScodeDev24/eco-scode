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
        primary: '#C9E9D2',       // Verde suave
        secondary: '#FEF9F2',     // Azul claro
        accent: '#789DBC',        // Amarillo brillante
        neutral: '#FFE3E3',       // Marrón claro
        darkBlue: '#000B58',          // Gris oscuro
        lightGray: '#9E9E9E',     // Gris claro
      },
    },
  },
  plugins: [],
};
export default config;
