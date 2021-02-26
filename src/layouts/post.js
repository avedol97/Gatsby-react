import React from "react";
import Image from 'gatsby-image'
import {graphql} from "gatsby";

export const query = graphql`
     query querySingleArticle($id: String!) {
  datoCmsArticle(id: {eq: $id}) {
    id
    author
    title
    featuredImage {
       fixed(width: 500){
      ...GatsbyDatoCmsFixed_tracedSVG
    }
    }
    articleContent {
      ... on DatoCmsParagraph {
        paragraphContent
        id
      }
      ... on DatoCmsHeading {
        headingContent
        id
      }
      ... on DatoCmsArticleImage {
        imageData {
          fixed(width: 500){
      ...GatsbyDatoCmsFixed_tracedSVG
    }
        }
        id
      }
    }
  }
}

`;


const PostLayout = ({data}) => {
    return (
        <div>
            <h1>{data.datoCmsArticle.title}</h1>
            <p>{data.datoCmsArticle.author}</p>
            <Image fixed={data.datoCmsArticle.featuredImage.fixed} />
            <p>{data.datoCmsArticle.articleContent.map(item =>
                {const itemKey = Object.keys(item)[1];

                switch (itemKey){
                    case 'paragraphContent':
                        return <p key={item.id}>{item.paragraphContent}</p>;
                    case 'headingContent':
                        return <h2 key={item.id}>{item.headingContent}</h2>;
                    case 'imageData':
                        return <Image key={item.id} fixed={item.imageData.fixed}/>;
                    default:
                        return null;
                }
                }
            )}</p>
        </div>
    );

};


export default PostLayout;
