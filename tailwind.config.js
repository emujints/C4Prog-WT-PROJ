/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/input.css",
      "./assets/css/site.css",
      "./index.html",
      "./about.html",
      "./contact.html",
      "./mywork.html",
      "./projects.html",
      "./resume.html"],
  theme: {
    extend: {},
  },
  plugins: [
      require('autoprefixer')
  ],
}

