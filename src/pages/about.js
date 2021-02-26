import React from "react"
import Image from "gatsby-image";
import styled from "styled-components";
import PageInfo from "../components/PageInfo/PageInfo";
import {graphql} from "gatsby";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
`;

const Line = styled.line`
  background-color: black;
  margin-left: -85px;
  width: calc(100% + 95px);
  height: 5px;
`;

const StyledImage = styled(Image)`
  position: absolute !important;
  right: 0;
  top: 0;
  width: 45%;
  object-fit: cover;
  height: 100vh;
`;

const StyledAbout = styled.div`
  max-width: 70%;
  margin: 10px 0 10px;
`;

const StyledAuthor = styled.div`
  font-size: 20px;
  margin: 10px 0 10px;
  font-weight: bold;
`;
const pageData = {
    title: 'about',
    paragraph: `While artists work from real to the abstract, architects must work from the abstract to the real.`,
};

const AboutPage = ({data}) => (


        <StyledWrapper>
            {console.log(data)}
            <PageInfo title={pageData.title} paragraph={pageData.paragraph}/>
            <Line/>
            {data.allDatoCmsAbout.nodes.map(items => (
                    <div>
                        <StyledAbout>{items.about}</StyledAbout>
                        <StyledAuthor>{items.author}</StyledAuthor>
                    </div>
                )
            )}
            <Line/>
            <StyledImage fluid={data.file.childImageSharp.fluid} alt="problem"/>
        </StyledWrapper>

)


export const query = graphql`
{
  file(name: {eq: "abigail"}) {
    childImageSharp {
      fluid(maxWidth: 1000, maxHeight: 1600, quality: 90) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  allDatoCmsAbout {
    nodes {
      about
      author
    }
  }
}

`;


export default AboutPage;
