/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./components/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./templates/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
        colors: {
            // primary color
            primaryEnabled: '#88c7ff',
            primaryHover: '#aad7ff',
            // secondary color
            secondaryEnabled: '#61b5ff',
            secondaryHover: '',
            // disabled color
            uiCanvasDisabled: '',
            textOnDisabled: '',
            // ui colors
            uiCanvas: '#001324',
            uiMaterial: '#001324',
            uiMaterialHover: '#00182E',
            // text colors
            textOnCanvas: '#E8E8E8',
            textOnPrimary: '#001324',
        }
    },
  },
  plugins: [],
}
