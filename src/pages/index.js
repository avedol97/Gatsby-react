import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 100px;
  height: 100px;
  background-color:pink ;
`;

const IndexPage = () => (
    <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
        <StyledDiv/>
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/articles/">Go to Articles</Link>
    </div>

)

export default IndexPage
