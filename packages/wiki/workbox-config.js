module.exports = {
  globDirectory: "src/assets/static",
  globPatterns: ["**/*.{jpg,png,svg,json,css,js,eot,ttf,woff,woff2,otf}"],
  swDest: "src/assets/static/sw.js",
  skipWaiting: true,
  clientsClaim: true,
  runtimeCaching: [
    {
      urlPattern: /\//,
      handler: "networkFirst"
    },
    {
      urlPattern: /\/.*html/,
      handler: "networkFirst"
    },
    {
      urlPattern: /\/img\/.*/,
      handler: "cacheFirst"
    }
  ]
};
