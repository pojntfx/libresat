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
                title
                author
                lastEdit
                imgSrc
                imgAlt
                featured
                date
              }
              timeToRead
              headings {
                value
                depth
              }
              excerpt
            }
          }
        }
      }
    `);
    data.allMdx.edges.forEach(
      ({
        node: {
          fileNode,
          fileAbsolutePath,
          timeToRead,
          frontmatter,
          headings,
          excerpt
        }
      }) => {
        createPage({
          path: `/blog/${fileNode.name}`,
          component: fileAbsolutePath,
          context: {
            ...frontmatter,
            title:
              headings.filter(({ depth }) => depth === 1).length === 0
                ? frontmatter.title
                : headings.filter(({ depth }) => depth === 1)[0].value,
            date: frontmatter.date
              ? frontmatter.date
              : fileNode.name
                  .split("-")
                  .filter((element, index) => (index < 3 ? element : null)) // Get the date from the post's filename, like with Jekyll
                  .join("-"),
            timeToRead,
            excerpt
          }
        });
      }
    );
  } catch (e) {
    throw e;
  }
};
