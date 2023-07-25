module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        apollo: ['Apollo'],
        cinzelRegular: ['CinzelRegular'],
        cinzelBold: ['CinzelBold'],
        ethereal: ['Ethereal'],
        PlayfairDisplay: ['Playfair Display'],
        Geometrica: ['Geometria'],
      },
      typography: {
        'justify-right': {
          css: {
            textAlign: 'right',
            '> *': {
              textAlign: 'justify',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
