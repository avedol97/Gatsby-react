import React, {useState} from "react";
import styled from 'styled-components'
import {Link} from "gatsby";

const NavigationWrapper = styled.nav`
  display: flex;
  position: absolute;
  top:20px;
  left:30px;
  align-items: center;
  justify-content: flex-start;
  font-family: 'Montserrat', sans-serif;
  a{
    color: black;
    text-decoration: inherit;
  }
`;

const Logo = styled.span`
  font-weight: 700;
  font-size: 20px;
  margin-right: 10px;
`;

const NavigationList = styled.ul`
  display: flex;
  list-style: none;
`;

const NavigationListItem = styled.li`
  font-weight: 600;
  font-size: 15px;
  margin-left: 32px;
  position: relative;
`;

const StyledDropDown = styled.div`
  //display: none;
  position: absolute;
  top: 20px;


  // ${NavigationListItem}:hover & {
  //   display: block;
  // }
`;

const Navigation = () => {
    const [ dropDown, setDropDown ] = useState(false);

    return (
        <NavigationWrapper>
            <Logo><Link to="/">HATTA</Link></Logo>
            <NavigationList>
                <NavigationListItem><Link to="/articles">articles</Link></NavigationListItem>
                <NavigationListItem><Link to="/about">about</Link></NavigationListItem>
                <NavigationListItem><Link to="/gallery">gallery</Link></NavigationListItem>
                {/*<NavigationListItem onClick={()=> setDropDown(!dropDown)}><Link to="/contact">contact</Link>*/}
                <NavigationListItem onClick={()=> setDropDown(!dropDown)}>contact
                    {console.log(dropDown)}
                        <StyledDropDown style={dropDown ? {display: 'block'} : {display: 'none'} }>
                            <div><Link to="/contact">Contact</Link></div>
                        <div>Halooo</div>
                    </StyledDropDown>
                </NavigationListItem>
            </NavigationList>
        </NavigationWrapper>
    )
}


export default Navigation
