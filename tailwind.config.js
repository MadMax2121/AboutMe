const config = {
  darkMode: 'class', // From the second configuration
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    // Note: Ensure the 'content' paths cover all necessary directories
  ],
  theme: {
    screens: {
      // Custom screens sizes, including 'xs' from the second configuration
      'xs': {'raw': '(max-height: 900px),(max-width:400px)'},
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      // Combined 'extend' from both configurations
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'custom-gray': '#848484',
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"), // From the second configuration
  ],
};

module.exports = config;
