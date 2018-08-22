module.exports = {
  plugins: [
    "gatsby-transformer-yaml",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/data`
      }
    },
    "gatsby-plugin-styled-components"
  ]
};
