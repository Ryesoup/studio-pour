// tailwind.config.js
module.exports = {
    content: ["./docs/**/*.html", "./docs/js/**/*.js"],
    theme: {
      extend: {
        colors: {
          walnut: "#6B4F3B",
          cream: "#F5F1EA",
          leaf: "#A3B18A",
        },
        fontFamily: {
          heading: ["'Noto Sans KR'", "sans-serif"],
          body: ["'Noto Sans KR'", "sans-serif"],
        },
      },
    },
  };
  