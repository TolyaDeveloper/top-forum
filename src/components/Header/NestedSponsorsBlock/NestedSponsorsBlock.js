import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NestedSponsorBlock = ({mobile}) => (
  <NavListNested className="nested-desktop">
    {mobile
      ? <NavItemNested>
        <Link to="/sponsors">All Sponsors</Link>
      </NavItemNested>
      : null}
    <NavItemNested>
      <Link to="/sponsors/general-sponsor" activeStyle={activeStyles}>General Sponsor</Link>
    </NavItemNested>
    <NavItemNested>
      <Link to="/sponsors/platinum-sponsor" activeStyle={activeStyles}>Platinum Sponsor</Link>
    </NavItemNested>
    <NavItemNested>
      <Link to="/sponsors/high-tech-sponsor" activeStyle={activeStyles}>High-Tech Sponsor</Link>
    </NavItemNested>
    <NavItemNested>
      <Link to="/sponsors/marmot-sponsor" activeStyle={activeStyles}>Gold Sponsor</Link>
    </NavItemNested>
    <NavItemNested>
      <Link to="/sponsors/silver-night-sponsor" activeStyle={activeStyles}>Silver Night Sponsor</Link>
    </NavItemNested>
  </NavListNested>
)

const NavListNested = styled.ul`
  position: absolute;
  top: 67px;
  background-color: #fff;
  border: 1px solid #d6d6d6;
  z-index: 9999;
  width: 290px;
  min-height: 240px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(100px);
  transition: all .3s ease;
  
  @media (max-width: 800px) {
    position: static;
    display: none;
    transform: translateY(0);
    min-height: 0;
  }
`

const activeStyles = {
  backgroundColor: '#d6d6d6'
}

const NavItemNested = styled.li`
  a {
    display: block;
    color: #323232!important;
    padding: 10px 20px;
    &:hover {
      background-color: #d6d6d6!important;
    }
  }
`

export default NestedSponsorBlock