module.exports = {
  plugins: [
    "gatsby-transformer-yaml",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/src/data`
      }
    },
    {
      resolve: "gatsby-mdx",
      options: {
        defaultLayouts: {
          posts: require.resolve("./src/layouts/Post.js"),
          default: require.resolve("./src/layouts/Default.js")
        }
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/posts/`
      }
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet"
  ]
};
