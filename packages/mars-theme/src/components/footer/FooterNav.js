import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import goldOutlineLogo from "../../assets/logo/goldOutlineLogo.png";

/**
 * Navigation Component
 *
 * It renders the navigation links
 */ 
const FooterNav = ({ state }) => {
      return (
        <NavContainer>
            <LinkContainer>
              <StyledLink link="/">
                Home
              </StyledLink>
              <StyledLink link="/sub/property-owners/">
                For Property Owners
              </StyledLink>
              <FooterLogo><a href="/"><img src={goldOutlineLogo} alt="logo"/></a></FooterLogo>
              <StyledLink link="/sub/for-renters/">
                For Renters
              </StyledLink>
              <StyledLink link="/blog">
                Blog
              </StyledLink>
            </LinkContainer>
          </NavContainer>
      );
 
};


export default connect(FooterNav);

const NavContainer = styled.nav`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  overflow-x: auto;

  @media screen and (max-width: 560px) {
    display: none;
  }
`;

const FooterLogo = styled.div`
  height: 40px;
  width: 40px;
  img{
    height: 40px;
    width: 40px;
  }
`

const LinkContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
`
const StyledLink = styled(Link)`
  display: flex;
  font-family: ivymode, serif;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 20%;
  &:hover {
    color:#ccb25c;
    font-weight: 800;
  } 
`;