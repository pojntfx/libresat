exports.createPages = async ({ graphql, actions: { createPage } }) => {
  createPosts(graphql, createPage);
};

createPosts = async (graphql, createPage) => {
  try {
    const { data } = await graphql(`
      {
        allMdx {
          edges {
            node {
              fileAbsolutePath
              fileNode {
                name
              }
              frontmatter {
                author
              }
            }
          }
        }
      }
    `);
    data.allMdx.edges.forEach(({ node }) => {
      createPage({
        path: `/posts/${node.fileNode.name}`,
        component: node.fileAbsolutePath,
        context: { author: node.frontmatter.author }
      });
    });
  } catch (e) {
    throw e;
  }
};
