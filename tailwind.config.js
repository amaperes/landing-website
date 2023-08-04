/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './assets/**/*.{vue,js,css}',
    './app.vue',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}'
  ],
  darkMode: 'class',
  theme: {
    deliciousHamburgers: {
      size: `30px`,
      color: `#586061`,
      colorLight: `#fff8f4`,
      padding: `0px`, // must be in px. if 0 will be false and treates as not set replace with my default
      animationSpeed: 1,
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Poppins', 'serif'],
      'h1' : ['Poppins','sans-serif'],
      'h2' : ['Poppins','sans-serif'],
      'body' : ['Poppins', 'sans-serif']
  },
    extend: {
      colors: {
        "primary": "var(--color-primary)",
        "primary-focus": "var(--color-primary-focus)",
        "primary-content": "#",
        "secondary": "var(--color-secondary)",
        "secondary-focus": "#",
        "secondary-content": "#",   
        "accent": "#7164F2",
        "accent-focus": "var(--color-accent-focus)",
        "accent-content": "#",       
        "neutral": "#1c1a2e" ,
        "neutral-focus": "#",
        "neutral-content": "#",      
        "base-100": "#343951",
        "base-200": "#",
        "base-300": "#",   
        "base-content": "#", 
        "info": "#3c68cd",
        "info-content": "#",   
        "success": "#20a274",
        "success-content": "#",      
        "warning": "#fbc037",
        "warning-content": "#",      
        "error": "#e8422c",
        "error-content": "",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-delicious-hamburgers'),
  ],
}

