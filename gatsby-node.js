const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve(`src/layouts/post.js`)

    const result = await graphql(`
    query Articles {
    allMdx {
    nodes {
      frontmatter {
        slug
      }
    }
  }
   }
  `);

    console.log(result.data.allMdx.nodes)

        result.data.allMdx.nodes.forEach(post => {
            createPage({
                path: `articles/${post.frontmatter.slug}`,
                component: blogPostTemplate,
                context: {
                    slug:post.frontmatter.slug,
                },
            })
        })

}
