/** @type {import('tailwindcss').Config} */
const path = require('path');

module.exports = {
  content: [
    // Use absolute paths to avoid issues when Turbopack infers a different workspace root
    path.join(__dirname, 'app', '**', '*.{js,jsx,ts,tsx}'),
    path.join(__dirname, 'pages', '**', '*.{js,jsx,ts,tsx}'),
    path.join(__dirname, 'components', '**', '*.{js,jsx,ts,tsx}'),
  ],
  // Safelist common color utilities used in dynamic or special-route files
  safelist: [
    { pattern: /^bg-(?:red|green|blue)-(?:50|100|200|300|400|500|600|700|800|900)$/ },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
