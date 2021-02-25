const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve(`src/layouts/post.js`)

    const result = await graphql(`
    query Articles {
    allMdx {
    nodes {
      frontmatter {
        title
        slug
        author
       featuredImage{
        childImageSharp{
        fluid(maxWidth: 700,maxHeight: 500){
        src
        }
        }
        
      }
      }
      excerpt(pruneLength: 50)
    }
  }
   }
  `);

    console.log(result.data.allMdx.nodes)

        result.data.allMdx.nodes.forEach(post => {
            createPage({
                path: `${post.frontmatter.slug}`,
                component: blogPostTemplate,
                context: {

                },
            })
        })

}
