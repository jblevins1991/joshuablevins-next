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
            primaryEnabled: '#2AA509',
            primaryHover: '#2FB80A',
            // secondary color
            secondaryEnabled: '',
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
