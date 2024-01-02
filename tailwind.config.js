/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'text': {
        50: '#f2f2f2',
        100: '#e6e6e6',
        200: '#cccccc',
        300: '#b3b3b3',
        400: '#999999',
        500: '#808080',
        600: '#666666',
        700: '#4d4d4d',
        800: '#333333',
        900: '#1a1a1a',
        950: '#0d0d0d',
      },
      'background': {
        50: '#f0f1f5',
        100: '#e1e3ea',
        200: '#c3c7d5',
        300: '#a5abc0',
        400: '#878fab',
        500: '#697296',
        600: '#545c78',
        700: '#3f455a',
        800: '#2a2e3c',
        900: '#15171e',
        950: '#0a0b0f',
      },
      'primary': {
        50: '#e5f3ff',
        100: '#cce6ff',
        200: '#99ceff',
        300: '#66b5ff',
        400: '#339cff',
        500: '#0084ff',
        600: '#0069cc',
        700: '#004f99',
        800: '#003566',
        900: '#001a33',
        950: '#000d1a',
      },
      'secondary': {
        50: '#f2ffe5',
        100: '#e6ffcc',
        200: '#ccff99',
        300: '#b3ff66',
        400: '#99ff33',
        500: '#80ff00',
        600: '#66cc00',
        700: '#4d9900',
        800: '#336600',
        900: '#1a3300',
        950: '#0d1a00',
      },
      'accent': {
        50: '#fdf8e7',
        100: '#fbf0d0',
        200: '#f8e2a0',
        300: '#f4d371',
        400: '#f1c541',
        500: '#edb612',
        600: '#be920e',
        700: '#8e6d0b',
        800: '#5f4907',
        900: '#2f2404',
        950: '#181202',
      },
     },
    fontSize: {
      '8xl': ['120px', {
        lineHeight: '120px',
        letterSpacing: '-6px',
        fontWeight: '500',
      }
    ],
      '7xl': ['72px', {
        lineHeight: '80px',
        letterSpacing: '-4.5px',
        fontWeight: '600',
      }
    ],
      '6xl': ['55px', {
        lineHeight: '60px',
        letterSpacing: '-2.5px',
        fontWeight: '500',
      }
    ],
      '5xl': ['48px', {
        lineHeight: '60px',
        letterSpacing: '-1.60px',
        fontWeight: '500',
      }
    ],
      '4xl': ['44px', {
        lineHeight: '60px',
        letterSpacing: '-1.20px',
        fontWeight: '500',
      }
    ],
      '3xl': ['28px', {
        lineHeight: '34px',
        letterSpacing: '-0.80px',
        fontWeight: '500',
      }
    ],
      '2xl': ['24px', {
        lineHeight: '30px',
        letterSpacing: '-1px',
        fontWeight: '400',
      }
    ],
      xl: ['24px', {
      lineHeight: '30px',
      letterSpacing: '-1px',
      fontWeight: '400',
    }
  ],
    lg: ['21px', {
      lineHeight: '30px',
      letterSpacing: '-0.800000px',
      fontWeight: '400',
    }
  ],
    base: ['17px', {
      lineHeight: '25px',
      letterSpacing: '-0.699999px',
      fontWeight: '400',
    }
  ],
    sm: ['15px', {
      lineHeight: '23px',
      letterSpacing: '-0.600000px',
      fontWeight: '400',
    }
  ],
    caption1: ['20px', {
      lineHeight: '24px',
      letterSpacing: '-0.600000px',
      fontWeight: '400',
    }
  ],
    caption2: ['18px', {
      lineHeight: '20px',
      letterSpacing: '-0.300000px',
      fontWeight: '400',
    }
  ],
    caption3: ['16px', {
      lineHeight: '18px',
      letterSpacing: '-0.5px',
      fontWeight: '400',
    }
  ],
    caption4: ['13px', {
      lineHeight: '15px',
      letterSpacing: '-0.2000000px',
      fontWeight: '400',
    }
  ],
    
    },

    extend: {},
  },
  plugins: [],
};