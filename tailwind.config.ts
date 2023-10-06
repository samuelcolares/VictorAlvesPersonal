import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        gif1: "url('https://imgur.com/aV1FE2B.gif')",
        gif2: "url('https://imgur.com/ZtPovSN.gif')",
        gif3: "url('https://imgur.com/RfpSpb7.gif')",
        gif4: "url('https://imgur.com/xo6Fp9h.gif')",
        gif5: "url('https://imgur.com/E6IXzj5.gif')",
        gif6: "url('https://imgur.com/0PHEKiu.gif')",
        prata: "linear-gradient(to right, #E8E0DB, #919191)",
        ouro: "linear-gradient(to right, #F3C56C, #B78C39)",
        diamante: "linear-gradient(to right, #42A8E2, #66E2F2)"
      },
      animation: {
        "ping-test": "ping .4s cubic-bezier(0, 0, 0.2, 1) reverse forwards;",
      },
      fontSize: {
        "0.25": "0.25rem",
        "0.375": "0.375rem",
        "0.5": "0.5rem",
        "0.625": "0.625rem",
        "0.75": "0.75rem",
        "0.875": "0.875rem",
        "1": "1rem",
        "1.125": "1.125rem",
        "1.25": "1.25rem",
        "1.375": "1.375rem",
        "1.5": "1.5rem",
        "1.625": "1.625rem",
        "1.75": "1.75rem",
        "1.875": "1.875rem",
        "2": "2rem",
        "2.125": "2.125rem",
        "2.25": "2.25rem",
        "2.375": "2.375rem",
        "2.5": "2.5rem",
        "2.625": "2.625rem",
        "2.75": "2.75rem",
        "2.875": "2.875rem",
        "3": "3rem",
        "3.125": "3.125rem",
        "3.25": "3.25rem",
        "3.375": "3.375rem",
        "3.5": "3.5rem",
        "3.625": "3.625rem",
        "3.75": "3.75rem",
        "3.875": "3.875rem",
        "4": "4rem",
      },
      gap: {
        "0.375": "0.375rem",
        "0.5": "0.5rem",
        "0.625": "0.625rem",
        "0.75": "0.75rem",
        "0.875": "0.875rem",
        "1": "1rem",
        "1.125": "1.125rem",
        "1.25": "1.25rem",
        "1.375": "1.375rem",
        "1.5": "1.5rem",
        "1.625": "1.625rem",
        "1.75": "1.75rem",
        "1.875": "1.875rem",
        "2": "2rem",
        "2.125": "2.125rem",
        "2.25": "2.25rem",
        "2.375": "2.375rem",
        "2.5": "2.5rem",
        "2.625": "2.625rem",
        "2.75": "2.75rem",
        "2.875": "2.875rem",
        "3": "3rem",
        "3.125": "3.125rem",
        "3.25": "3.25rem",
        "3.375": "3.375rem",
        "3.5": "3.5rem",
        "3.625": "3.625rem",
        "3.75": "3.75rem",
        "3.875": "3.875rem",
        "4": "4rem",
      },
      padding: {
        "0.375": "0.375rem",
        "0.5": "0.5rem",
        "0.625": "0.625rem",
        "0.75": "0.75rem",
        "0.875": "0.875rem",
        "1": "1rem",
        "1.125": "1.125rem",
        "1.25": "1.25rem",
        "1.375": "1.375rem",
        "1.5": "1.5rem",
        "1.625": "1.625rem",
        "1.75": "1.75rem",
        "1.875": "1.875rem",
        "2": "2rem",
        "2.125": "2.125rem",
        "2.25": "2.25rem",
        "2.375": "2.375rem",
        "2.5": "2.5rem",
        "2.625": "2.625rem",
        "2.75": "2.75rem",
        "2.875": "2.875rem",
        "3": "3rem",
        "3.125": "3.125rem",
        "3.25": "3.25rem",
        "3.375": "3.375rem",
        "3.5": "3.5rem",
        "3.625": "3.625rem",
        "3.75": "3.75rem",
        "3.875": "3.875rem",
        "4": "4rem",
      },
      margin: {
        "0.375": "0.375rem",
        "0.5": "0.5rem",
        "0.625": "0.625rem",
        "0.75": "0.75rem",
        "0.875": "0.875rem",
        "1": "1rem",
        "1.125": "1.125rem",
        "1.25": "1.25rem",
        "1.375": "1.375rem",
        "1.5": "1.5rem",
        "1.625": "1.625rem",
        "1.75": "1.75rem",
        "1.875": "1.875rem",
        "2": "2rem",
        "2.125": "2.125rem",
        "2.25": "2.25rem",
        "2.375": "2.375rem",
        "2.5": "2.5rem",
        "2.625": "2.625rem",
        "2.75": "2.75rem",
        "2.875": "2.875rem",
        "3": "3rem",
        "3.125": "3.125rem",
        "3.25": "3.25rem",
        "3.375": "3.375rem",
        "3.5": "3.5rem",
        "3.625": "3.625rem",
        "3.75": "3.75rem",
        "3.875": "3.875rem",
        "4": "4rem",
      },
      spacing: {
        "0.375": "0.375rem",
        "0.5": "0.5rem",
        "0.625": "0.625rem",
        "0.75": "0.75rem",
        "0.875": "0.875rem",
        "1": "1rem",
        "1.125": "1.125rem",
        "1.25": "1.25rem",
        "1.375": "1.375rem",
        "1.5": "1.5rem",
        "1.625": "1.625rem",
        "1.75": "1.75rem",
        "1.875": "1.875rem",
        "2": "2rem",
        "2.125": "2.125rem",
        "2.25": "2.25rem",
        "2.375": "2.375rem",
        "2.5": "2.5rem",
        "2.625": "2.625rem",
        "2.75": "2.75rem",
        "2.875": "2.875rem",
        "3": "3rem",
        "3.125": "3.125rem",
        "3.25": "3.25rem",
        "3.375": "3.375rem",
        "3.5": "3.5rem",
        "3.625": "3.625rem",
        "3.75": "3.75rem",
        "3.875": "3.875rem",
        "4": "4rem",
      },

      colors: {
        dark: "#1A1B1A",
        white: "#FAFAFA",
        primary50: "#F4F2FF",
        primary100: "#DFD8FE",
        primary200: "#C8BFFA",
        primary300: "#B1A8F3",
        primary400: "#9991E7",
        primary500: "#827BD7",
        primary600: "#6C67C2",
        primary700: "#5754A8",
        primary800: "#45438A",
        primary900: "#34326A",
        primary950: "#3E4095",
        primaryBlue01: "#3E4095",
      },
      fontWeight: {
        hairline: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      lineHeight: {
        button: "1.875rem",
      },
      letterSpacing: {
        button: "0.02rem",
      },
      gridTemplateColumns: {
        gifcard: "repeat(3, minmax(0, auto))",
      },
      borderColor: {
        gifcard: "#121212",
        primary50: "#F4F2FF",
        primary100: "#DFD8FE",
        primary200: "#C8BFFA",
        primary300: "#B1A8F3",
        primary400: "#9991E7",
        primary500: "#827BD7",
        primary600: "#6C67C2",
        primary700: "#5754A8",
        primary800: "#45438A",
        primary900: "#34326A",
        primary950: "#3E4095",
        primaryBlue01: "#3E4095",
      },
      backgroundColor: {
        dark: "#1A1B1A",
        white: "#FAFAFA",
        primary50: "#F4F2FF",
        primary100: "#DFD8FE",
        primary200: "#C8BFFA",
        primary300: "#B1A8F3",
        primary400: "#9991E7",
        primary500: "#827BD7",
        primary600: "#6C67C2",
        primary700: "#5754A8",
        primary800: "#45438A",
        primary900: "#34326A",
        primary950: "#3E4095",
        primaryBlue01: "#3E4095",
      },
      boxShadow: {
        button: "0.75rem 0.75rem 0px 0px #5754A8",
        landing: "0.75rem 0.75rem 0.75rem 0px rgba(239, 239, 239, 0.12)",
        card: "-.75rem .25rem 3.75rem 0px rgba(62, 64, 149, 0.12)",
        mobileCard: "-0.0625rem .125rem 1rem rgba(62, 64, 149, 0.42);",
        gifcard: "-0.25rem 0.25rem 1.25rem 0px rgba(250, 250, 250, 0.04)",
        planosConsultoria: "-.75rem .25rem .75rem 0px rgba(62, 64, 149, 0.04)",
      },
      dropShadow: {
        landing: "-.25rem .25rem 1.25rem rgba(18, 18, 18, 0.80)",
      },
    },
  },
  plugins: [],
};
export default config;
