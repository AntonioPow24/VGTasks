/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'bg-white':'#F5F8FC',
        'bg-principal':'#DADDEB',
        'black-text':'#343434',
        'white-text':'#EEEEEE',
        'skyblue-text':'#4BB6D8',
        'purple-color':'#9D78E5',
        'NoSelectedFilter':'#21212175',
      },
      gridTemplateColumns: {
        'auto-fill-420': 'repeat(auto-fill, minmax(420px, 1fr))',
      },
    },

    screens: {
      '530': {'max':'530px'},

      // => @media (min-width: 640px) { ... }

      '800': {'max':'800px'},
      // => @media (min-width: 768px) { ... }

      '960': {'max':'960px'},
      // => @media (min-width: 1024px) { ... }

      '1431': '1431px',
      // => @media (min-width: 1280px) { ... }

      '1430': {'max':'1430px'},
      // => @media (min-width: 1536px) { ... }
      '1530':{'max':'1550px'}
    }

    
  },
  plugins: [],
}