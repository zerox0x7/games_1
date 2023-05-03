const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function ({addUtilities}){  addUtilities({
  ".my-rotate-y-180":{
    transform:"rotateY(180deg)"
  },
  ".preserve-3d":{
    transformStyle: "preserve-3d",
  },
  ".prespective":{
    prespective:"1000px",
  },
  ".backface-hidden":{
    backfaceVisibility:"hidden",
  }
 })})
 



module.exports = {
  content: ["./*{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        arabic: [ "'Noto Sans Arabic', sans-serif"],
      }
    },
  },
  plugins: [Myclass],
}



