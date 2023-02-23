import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { data, sidebarData } from "./data";
import {
  HeaderContainer,
  NavUl,
  NavLi,
  ItemLink,
  LogoContainer,
  SidebarContainer,
  SideNavUl,
  SideNavLi,
  SideItemLink,
  Icon,
  Backdrop,
} from "./header.styles";

function Header() {
  const [sidebar, setSidebar] = useState(false);

  function showSidebar() {
    setSidebar((prevState) => {
      return !prevState;
    });
  }

  return (
    <React.Fragment>
      {/* -------------> NAVBAR  <------------- */}
      <HeaderContainer>
        <Icon>
          <IoMenu onClick={showSidebar} />
        </Icon>
        <LogoContainer>
          <ItemLink to="/" onClick={() => window.scrollTo(0, 0)}>
            <h1>Country Shack</h1>
          </ItemLink>
        </LogoContainer>
        <NavUl>
          {data.map((item, id) => {
            return (
              <NavLi key={id}>
                <ItemLink to={item.link}>{item.page}</ItemLink>
              </NavLi>
            );
          })}
        </NavUl>
      </HeaderContainer>

      {/* -------------> SIDEBAR  <------------- */}
      <Backdrop slide={sidebar} onClick={showSidebar} />
      <SidebarContainer onClick={showSidebar} slide={sidebar}>
        <Icon>
          <IoClose />
        </Icon>
        <SideNavUl>
          {sidebarData.map((item, id) => {
            return (
              <SideNavLi key={id}>
                <SideItemLink
                  to={item.link}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {item.page}
                </SideItemLink>
              </SideNavLi>
            );
          })}
        </SideNavUl>
      </SidebarContainer>
    </React.Fragment>
  );
}

export default Header;
