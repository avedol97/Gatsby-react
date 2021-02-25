import React from "react"
import styled from 'styled-components'
import Image from 'gatsby-image'
import Button from "../components/Button/button";
import {graphql} from "gatsby"

const ContentWrapper = styled.div`
    width: 65%;
  height: calc(100vh - 80px);
    text-align: right;
    display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  
  h1 {
    font-size: 85px;
    margin: 0;
    width: 40%;
    line-height: 0.9;
  }
  
  p{
    margin: 20px 0 40px;
    width: 40%;
  }
    
`;

const StyledImage= styled(Image)`
  position: absolute !important;
  top: 0;
  right: 0;
  width: 35%;
  height: 100vh;
  object-fit: cover;
`;

const IndexPage = ({data}) => (
    <>
        <ContentWrapper>
            <h1>Your new space</h1>
            <p>While artist work from real to the abstract, architects must work from the abstract to the real.</p>
            <Button>estimate project</Button>
        </ContentWrapper>
        <StyledImage fluid={data.file.childImageSharp.fluid} />
        </>
)

export const query = graphql`
{
    file(name: {eq: "hero"}){
        childImageSharp{
            fluid(maxWidth: 1000, maxHeight:1600, quality:90){
              ...GatsbyImageSharpFluid_tracedSVG
            }
        }
    }
}
  `


export default IndexPage







