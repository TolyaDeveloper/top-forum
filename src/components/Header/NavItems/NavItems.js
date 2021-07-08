import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import NestedSponsorsBlock from "../NestedSponsorsBlock/NestedSponsorsBlock"
import NestedSponsorsMobileBlock from "../NestedSponsorsMobileBlock/NestedSponsorsMobileBlock"

const NavItems = ({mobile}) => {
  const [popupVisibility, setPopupVisibility] = useState(false)

  return (
    <NavList>
      <NavItem>
        {!mobile
          ? <React.Fragment>
            <Link to="/sponsors" activeStyle={activeStyles} partiallyActive={true}>Sponsors</Link>
            <NestedSponsorsBlock />
          </React.Fragment>
          : <React.Fragment>
            <MobileNavButton type="button" onClick={() => setPopupVisibility(!popupVisibility)}>Sponsors</MobileNavButton>
            {popupVisibility ? <NestedSponsorsMobileBlock /> : null}
          </React.Fragment>}
      </NavItem>
      <NavItem>
        <Link to="/exhibitors" activeStyle={activeStyles}>Exhibitors</Link>
      </NavItem>
      <NavItem>
        <Link to="/speakers" activeStyle={activeStyles}>Speakers</Link>
      </NavItem>
      <NavItem>
        <Link to="/media" activeStyle={activeStyles}>Media</Link>
      </NavItem>
    </NavList>
  )
}

const NavList = styled.ul`
  display: flex;
  
  @media (max-width: 800px) {
    display: none;
  }
`

const activeStyles = {
  backgroundColor: '#212121'
}

const NavItem = styled.li`
  position: relative;
  a {
    position: relative;
    padding: 20px;
    color: #fff;
    font-size: 15px;
    line-height: 1.76;
    transition: background-color 0.2s ease-in;
    &:hover {
      background-color: #212121;
    }
  }
  &:hover > .nested-desktop {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  & + & {
    a:before {
      content: '';
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      width: 1px;
      height: 35px;
      background-color: #474747;
    }
  }
`

const MobileNavButton = styled.button`
  position: relative;
  padding: 20px;
  font-size: 15px;
  line-height: 1.76;
  border: none;
  color: #fff;
  background-color: transparent;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 5px solid #fff;
  }
`

export default NavItems