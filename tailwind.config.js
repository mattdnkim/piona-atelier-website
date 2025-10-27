/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    "tracking-[-0.02em]",
    "drop-shadow-sm",
    "drop-shadow",
    "md:text-[2rem]",
    "top-8", "md:top-0",
  ],
  theme: { extend: { colors: { piona: { green: "#043927" } } } },
  plugins: [],
}
