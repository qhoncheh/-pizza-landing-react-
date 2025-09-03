// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/images/bg2.jpg')",  
      },
    },
  },
  plugins: [],
};
