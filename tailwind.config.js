/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
    sm: '480px',
    md: '768px',
    lg: '1000px',
    xl: '1440px',
  },
    extend: {
      fontFamily : {
      'poppins' : ['Poppins']
    } ,
    colors : {
      themeDark : '#000000',
      themeLight : '#150050',
      themeLighter : '#3F0071',
      themeLightest : '#610094',
      themeLinks : '#C996CC',

      textColor : '#252B42',
      secondaryTextColor : '#737373',
      primaryColor : '#96BB7C',
      fadedPrimaryColor : '#EFF8ED'
    }
  },
  },
  plugins: [],
};
