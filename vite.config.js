// vite.config.js
export default {
  build: {
    rollupOptions: {
      input: {
        main: '/index.html',
        earth: '/earth.html',
        jupiter: '/jupiter.html',
        neptune: '/neptune.html',
        saturn: '/saturn.html',
        uranus: '/uranus.html',
        mars: '/mars.html',
        venus: '/venus.html',
      },
    },
  },
};
