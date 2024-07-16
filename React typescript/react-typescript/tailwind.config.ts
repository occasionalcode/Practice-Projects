import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        homeBg: "#F2C9A0",
        calcBg: "#E3DEDA",
        screenBG: "#BFBFA2",
        twoButtonsBg: "#4C4C4C",
        twoButtonsBorder: "#1B1B1B",
        mainButtonBg: "#CEC0B6",
        mainButtonC: "#DB6429",
        mainButtonCBorder: "#B14F1E",
        mainButtonNum: "#F5F0EB",
        mainButtonNumBG: "#E4D8CA",
        mainButtonFunc: "#EAB071",
        mainButtonFuncBG: "#E39744",
        mainButtonEq: "#A49DAA",
        mainButtonEqBG: "#8A8192",
        calcTopRect1: "#E54D3F",
        calcTopRect2: "#E7C22C",
        calcTopRect3: "#005EAB",
        buttonFontMain: '#AF4A17'

      },
      borderRadius:{
        calcBord: '30px',
        calcScreenBord: '7px',
      },
      width:{
        calcW: '320px',
        
        
      },
      fontFamily:{
        gemunu:['Gemunu Libre', 'sans-serif'],
        gugi:['Gugi', 'sans-serif']
      },
      fontSize: {
        'calcNum': '40px',
      },
      margin:{
        'mainButtonTop': "0.25rem"
      },
      height:{
        mainButton0: "4rem"
      },
      
      dropShadow: {
        'mainButtons': '2.5px  2.5px 2px rgba(0, 0, 0, 0.50)',
      },

    },
  },
  plugins: [],
}
export default config;