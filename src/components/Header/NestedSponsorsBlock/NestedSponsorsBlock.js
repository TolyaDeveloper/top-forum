import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"

const NestedSponsorBlock = () => {
  return (
    <NavListNested>
      <NavItemNested>
        <Link to="/sponsors/general-sponsor">General Sponsor</Link>
      </NavItemNested>
      <NavItemNested>
        <Link to="/sponsors/platinum-sponsor">Platinum Sponsor</Link>
      </NavItemNested>
      <NavItemNested>
        <Link to="/sponsors/high-tech-sponsor">High-Tech Sponsor</Link>
      </NavItemNested>
      <NavItemNested>
        <Link to="/sponsors/marmot-sponsor">Gold Sponsor</Link>
      </NavItemNested>
      <NavItemNested>
        <Link to="/sponsors/silver-night-sponsor">Silver Night Sponsor</Link>
      </NavItemNested>
    </NavListNested>
  )
}

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
`

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