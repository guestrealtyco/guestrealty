import React from "react";
import { connect, styled } from "frontity";
import FontFace from "../styles/fontFace";
import Link from "../link";
import Nav from "./nav";
import MobileMenu from "./menu";
import goldOutlineLogo from "../../assets/logo/goldOutlineLogo.png";

const Header = ({ state }) => {
  return (
    <>
      <Container>
        <FontFace />
        <TitleContainer>
        <StyledLink link="/">
        <HeaderLogo><img src={goldOutlineLogo} alt="logo"/></HeaderLogo>
        <div><span>GUEST REALTY</span></div>
        </StyledLink>
        </TitleContainer>
        <NavContainer>
          <MobileMenu />
          <Nav />
        </NavContainer>
      </Container>
      
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Container = styled.div`
  width: 848px;
  width: 100%;
  box-sizing: border-box;
  padding: 24px;
  font-family: -apple-system, BlinkMacSystemFont, "SourceSansPro", "ivymode", "freight-sans-pro", "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #f6f2ec;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
`;

const TitleContainer = styled.div`
 width: 100%;
 display: flex;
 flex-direction: row;
 flex-wrap: nowrap;
div{
    display: flex;
    flex-direction: row;
  span{
    padding-top: 10px;
    padding-left: 10px;
    font-family: ivymode, sans-serif;
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: 1.2px;
 }
}
 
`

const HeaderLogo = styled.div`
  img{
    height: 50px;
    width: 50px;
  }
  `

const NavContainer = styled.div`
  width: 85%;
  display: flex;
  align-items: right;
  justify-content: flex-end;
  flex-direction: row;
  flex-wrap: nowrap;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
`;
