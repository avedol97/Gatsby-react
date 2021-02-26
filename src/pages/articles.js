import React from "react"
import {graphql} from 'gatsby'
import slugify from "slugify";
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
    const {allDatoCmsArticle: {nodes}} = data;

    return(<div>
        <PageInfo title={pageData.title}  paragraph={pageData.paragraph}/>
        <ArticlesWrapper>
            {nodes.map(({title,featuredImage},index) => (
                <ArticlePreview
                    key={index}
                    title={title}
                    slug={slugify(title,{lower:true})}
                    image={featuredImage.fluid}
                />
            ) )}
        </ArticlesWrapper>
    </div>)
}






export const query = graphql`
{
  allDatoCmsArticle {
    nodes {
      title
      featuredImage {
        fluid(maxWidth: 500){
...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }
  }
}
`;

export default ArticlesPage;
