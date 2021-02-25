import React from "react"
import {graphql} from 'gatsby'

const ArticlesPage = ({data}) => (
    <div>
        <h1>Blog Page</h1>
        <p>Welcome to Blog page</p>
        {data.allMdx.nodes.map(item => (
            <>
            <h2>{item.frontmatter.title}</h2>
            <p>{item.frontmatter.author}</p>
                <p>{item.excerpt}</p>
            </>
        ) )}
    </div>
)


export const query = graphql`
{
  allMdx{
    nodes{
     frontmatter {
        author
        slug
        title
  }
    excerpt(pruneLength:50)
  }
  }
  }
`;

export default ArticlesPage;
