module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      backgroundImage: {
        divider: "url('./images/Divider/Bottom-divider.svg')",
        dividerColor: "url('./images/Divider/ColorCorrection.svg')",
        video: "url('./images/Hero-video.mp4')",
        hero: "url('./images/Hero-bg.png')",
        pattern: "url('./images/Pattern.svg')",
        active: "url('./images/Components/Active.svg')",
        bullet: "url('./images/Components/Bullet.svg')",
        bulletActive: "url('./images/Components/BulletActive.svg')",
        IgfBg: "url('./images/IgfTeam.jpg')",
        sfondoVideo: "url('./images/sfondoVideo.jpg')",
        sfondoSpazio: "url('./images/sfondospazio.jpeg')",
      },
      fontFamily: {
        BlenderBold: ['Blender-Bold', 'sans-serif'],
        BlenderHeavy: ['Blender-Heavy', 'sans-serif'],
        BlenderMedium: ['Blender-Medium', 'sans-serif'],
        BlenderBook: ['Blender-Book', 'sans-serif'],
      },
      keyframes: {
        bounceAlpha: {
          '0%': { opacity: '1', transform: 'translateX(0px) scale(1)' },
          '25%': { opacity: '0', transform: 'translateX(10px) scale(0.9)' },
          '26%': { opacity: '0', transform: 'translateX(-10px) scale(0.9)' },
          '55%': { opacity: '1', transform: 'translateX(0px) scale(1)' },
        },
      },

      animation: {
        bounceAlpha: 'bounceAlpha infinite linear 2s ',
      },
    },
  },

  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-debug-screens'),
  ],
};
