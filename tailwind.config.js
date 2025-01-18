/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      animation: {
        hello: 'hello 3s ease-in-out infinite',
      },

      keyframes: {
        hello: {
          '0%, 100% ': { transform: 'rotate(-30deg)' },

          '50%': { transform: 'rotate(30deg)' }
        }
      },

      blur: {
        blur1: '8px',
        shadow: ['inset 0 -1px 0 0 rgba(0, 0, 0, 0.2)'],
      },


      opacity: {
        '1': '0.3',
        '2': '0.7'
      },
      fontFamily: {
        teko: ['Teko, sans-serif'],
        inter: ['Inter, sans-serif'],
        jersey: ['Jersey, sans-serif'],
      },

      colors: {
        'body': {
          background: '#16161a',
          judul: '#fffffe',
          text: '#94a1b2',
          background2: '#242629',
          card: '#7f5af0',
          hover: '#4f4f59',
          hover2: '#422696',
        }
      },
    },

  },
  plugins: [],
}

