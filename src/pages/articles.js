import React from "react"
import {graphql} from 'gatsby'
import PageInfo from "../components/PageInfo/PageInfo";
import ArticlePreview from "../components/ArticlePreview/ArticlePreview";
import styled from 'styled-components'


const ArticlesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-gap: 50px;
`;

const pageData = {
    title: 'articles',
    paragraph: `While artists work from real to the abstract, architects must work from the abstract to the real.`,
};

const ArticlesPage = ({data}) => {
    const {allMdx: {nodes}} = data;

    return(<div>
        <PageInfo title={pageData.title}  paragraph={pageData.paragraph}/>
        <ArticlesWrapper>
            {nodes.map(({excerpt,frontmatter:{title,slug,author,featuredImage}}) => (
                <ArticlePreview
                    key={slug}
                    title={title}
                    slug={slug}
                    image={featuredImage.childImageSharp.fluid}
                    excerpt={excerpt}
                />
            ) )}
        </ArticlesWrapper>
    </div>)
}






export const query = graphql`
{
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
`;

export default ArticlesPage;
