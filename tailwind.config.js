/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'bg-white':'#FFFAF4',
        'bg-principal':'#DADDEB',
        'black-text':'#343434',
        'white-text':'#EEEEEE',
        'skyblue-text':'#4BB6D8',
        'purple-color':'#9D78E5',
        'NoSelectedFilter':'#21212175',
      },
      gridTemplateColumns: {
        'auto-fill-440': 'repeat(auto-fill, minmax(445px, 1fr))',
        'auto-fill-480': 'repeat(auto-fill, minmax(480px, 1fr))',
        'auto-fill-450': 'repeat(auto-fill, minmax(450px, 1fr))',
      },
    },

    screens: {

      '550':{'max':'550px'},

      '530': {'max':'530px'},

      // => @media (min-width: 640px) { ... }

      '800': {'max':'800px'},
      // => @media (min-width: 768px) { ... }

      '960': {'max':'960px'},
      // => @media (min-width: 1024px) { ... }

      '1431': '1431px',
      '961': '961px',
      // => @media (min-width: 1280px) { ... }

      '1430': {'max':'1430px'},
      // => @media (min-width: 1536px) { ... }
      '1530':{'max':'1550px'}
    }

    
  },
  plugins: [],
}