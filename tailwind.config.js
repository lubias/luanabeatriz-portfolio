// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-start': 'rgba(50,37,63,1)',
        'custom-mid1': 'rgba(68,54,89,1)',
        'custom-mid2': 'rgba(140,97,140,1)',
        'custom-end': 'rgba(50,37,63,1)',
      },
      backgroundImage: theme => ({
        'custom-gradient': 'linear-gradient(0deg, rgba(50,37,63,1) 10%, rgba(68,54,89,1) 40%, rgba(140,97,140,1) 70%, rgba(50,37,63,1) 100%)',
      }),
      boxShadow: {
        'custom': 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
        'skills': 'rgba(255, 255, 255, 0.8) 0px 0px 15px'
        
      },
      fontFamily: {
        sans: 'var(--font-poppins)',
        alt: 'var(--font-dancing)',
      },
      screens: {
        'lg_1': { max: '1635px' },
        'lg_2': { max: '1365px' },
        'lg_3': { max: '1015px' },
        'md_1': { max: '768px' },
        'md_2': { max: '690px' },
        'md_3': { max: '520px' },
        'sm_1': { max: '425px' },
      },
    },
  },
  plugins: [],
}
