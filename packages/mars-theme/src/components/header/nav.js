import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import FontFace from "../styles/fontFace"

/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const Nav = ({ state }) => (
  <NavContainer>
    <FontFace />
    {state.theme.menu.map(([name, link]) => {
      // Check if the link matched the current page url
      const isCurrentPage = state.router.link === link;
      return (
        <NavItem key={name}>
          {/* If link url is the current page, add `aria-current` for a11y */}
          <Link link={link} aria-current={isCurrentPage ? "page" : undefined}>
            {name}
          </Link>
        </NavItem>
      );
    })}
    <a href="tel:+610280956240"><button className="nav-button btn-gold-light">Call Us</button></a>
    {/* <a href="/sub/for-renters/"><button className="nav-button btn-dark">Book Now</button></a> */}
  </NavContainer>
);

export default connect(Nav);

const NavContainer = styled.nav`
  font-family: ivymode, sans-serif;
  font-style: normal;
  font-weight: 400;
  list-style: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 848px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 0 24px;
  margin: 0;
  overflow-x: auto;
  z-index: 2;

  @media screen and (max-width: 950px) {
    display: none;
  }
`;

const NavItem = styled.div`
  padding: 0;
  margin: 0 16px;
  color: #f6f2ec;
  font-size: 1rem;
  font-weight: 550;
  box-sizing: border-box;
  flex-shrink: 0;
  font-family: ivymode, serif;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 1px;

  & > a {
    display: inline-block;
    line-height: 2em;
    border-bottom: 2px solid;
    border-bottom-color: transparent;
    transition: all .3s ease; 
    /* Use for semantic approach to style the current link */
    &[aria-current="page"] {
      border-bottom-color: #ccb25c;
      font-family: ivymode, serif;
      font-weight: 750;
    }
    &:hover {
        color:#ccb25c;
        font-weight: 600; 
        font-family: ivymode, serif;
        font-style: normal;
      }
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;

    &:after {
      content: "";
      display: inline-block;
      width: 24px;
    }
  }
`;
