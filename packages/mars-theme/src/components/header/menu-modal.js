import React from "react";
import { styled, connect } from "frontity";
import Link from "../link";

const MenuModal = ({ state }) => {
  const { menu } = state.theme;
  const isThereLinks = menu != null && menu.length > 0;

  return (
    <>
      <MenuOverlay />
      <MenuContent as="nav">
        {isThereLinks &&
          menu.map(([name, link]) => (
            <MenuLink
              key={name}
              link={link}
              aria-current={state.router.link === link ? "page" : undefined}
            >
              {name}
            </MenuLink>
          ))}
              <a href="tel:+610280956240"><button className="button btn-dark">Call us</button></a>
              {/* <a href="/sub/for-renters/"><button className="button btn-dark">Book Now</button></a> */}
      </MenuContent>
    </>
  );
};

const MenuOverlay = styled.div`
  background-color: #f6f2ec;
  width: 100vw;
  height: 100vh;
  overflow: hidden auto;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  background-color: #013110;
  background: url("https://guestrealty-71f30a.ingress-comporellon.easywp.com/wp-content/uploads/2020/11/GR_waves-bg.jpg");
  background: url("https://guestrealty-71f30a.ingress-comporellon.easywp.com/wp-content/uploads/2020/11/GR_waves-bg.jpg"); /* The least supported option. */
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 2;
`;

const MenuContent = styled.div`
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #f6f2ec;
  z-index: 2;
`;

const MenuLink = styled(Link)`
  width: 100%;
  display: inline-block;
  outline: 0;
  font-size: 20px;
  text-align: center;
  padding: 1.2rem 0;
  font-family: ivymode, serif;
  color: #ccb25c;
  z-index: 2;
  &:hover,
  &:focus {
    background-color: rgba(204,178, 92, 0.05);
    color: #ccb25c;
  }
  /* styles for active link */
  &[aria-current="page"] {
    color: #ccb25c;
    font-weight: bold;
    /* border-bottom: 4px solid yellow; */
  }
`;

export default connect(MenuModal);
