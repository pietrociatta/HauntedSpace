module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        divider: "url('./images/Divider/Bottom-divider.svg')",
        video: "url('./images/Hero-video.mp4')",
        hero: "url('./images/Hero-bg.png')",
        pattern: "url('./images/Pattern.svg')",
      },
      fontFamily: {
        BlenderBold: ["Blender-Bold", "sans-serif"],
        BlenderHeavy: ["Blender-Heavy", "sans-serif"],
        BlenderMedium: ["Blender-Medium", "sans-serif"],
        BlenderBook: ["Blender-Book", "sans-serif"],
      },
    },
  },
  plugins: [],
};
