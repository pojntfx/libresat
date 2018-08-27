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
            title: headings.filter(({ depth }) => depth === 1).firstChild
              ? headings.filter(({ depth }) => depth === 1)[0].value
              : frontmatter.title,
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

// exports.onCreatePage = async ({
//   page,
//   actions: { createPage, deletePage }
// }) => {
//   try {
//     const oldPage = Object.assign({}, page);
//     console.log(page);
//     if (!page.context.title) {
//       page.context.title = "Test title";
//     }
//     if (page.path !== oldPage.path) {
//       deletePage(oldPage);
//       createPage(page);
//     }
//   } catch (e) {
//     throw e;
//   }
// };
