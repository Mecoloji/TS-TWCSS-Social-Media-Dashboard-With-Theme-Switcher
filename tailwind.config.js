/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
    },
    colors: {
      LimeGreen: "hsl(163, 72%, 41%)",
      BrightRed: "hsl(356, 69%, 56%)",

      Facebook: "hsl(208, 92%, 53%)",
      Twitter: "hsl(203, 89%, 53%)",
      Instagram: "linear gradient hsl(37, 97%, 70%) to hsl(329, 70%, 58%)",
      YouTube: "hsl(348, 97%, 39%)",

      // Dark Theme
      DToggle: "linear gradient hsl(210, 78%, 56%) to hsl(146, 68%, 55%)",

      // Light Theme
      LToggle: "hsl(230, 22%, 74%)",

      // Dark Theme
      VDBlueBG: "hsl(230, 17%, 14%)",
      VDBluePattern: "hsl(232, 19%, 15%)",
      DDBlue: "hsl(228, 28%, 20%)",
      DBlue: "hsl(228, 34%, 66%)",
      WhiteTxt: "hsl(0, 0%, 100%)",

      // Light Theme
      WhiteBG: "hsl(0, 0%, 100%)",
      VPBlue: "hsl(225, 100%, 98%)",
      LGBlue: "hsl(227, 47%, 96%)",
      DGBlue: "hsl(228, 12%, 44%)",
    },
  },
  plugins: [],
};

