/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins : ['Poppins', "sans-serif"],
        balooBhai : ['Baloo Bhai 2', "cursive"],
        karma: ['Karma', "serif"],
        montserrat: ['Montserrat', "sans-serif"],
        mukta: ['Mukta', "sans-serif"],
        roboto: ['Roboto', "sans-serif"],
        ubuntu: ['Ubuntu', "sans-serif"],
      },
      backgroundImage: {
        'nssbanner' : "url('/src/assets/finalbanner2.jpg')",
        "achievementbanner" : "url('/src/assets/achievmentBanner.jpeg')",
        'nic' : "url(/src/assets/nic3.png)",
        'idy' : "url(/src/assets/idy.JPEG)",
        'adv' : "url(/src/assets/finaladv3.JPG)",
        'bd' : "url(/src/assets/bd3.png)",
        'sandesh' : "url(/src/assets/sndesh2.png)",
        'specialcamp' : "url(/src/assets/specialcamp.jpg)",
        'adoptedvillage' : "url(/src/assets/adoptedvillage.JPEG)",
        'ploggingdrive' : "url(/src/assets/PloggingDrive.jpg)",

      },
      spacing : {
        '700' : '700px',
        '600' : '600px',
        '350' : '350px',
        '550' : '550px',
        '450' : '450px',
        '400' : '400px',
        'inherit' : 'inherit'
      },
      height : {
        'inherit' : 'inherit'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
