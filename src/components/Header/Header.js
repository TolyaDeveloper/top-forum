import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Container from "../UI/Container"
import { HeaderTopLink, RegisterLink } from "../UI/Links"
import { StaticImage } from "gatsby-plugin-image"
import Logo from "../UI/Logo"
import NestedSponsorsBlock from "./NestedSponsorsBlock/NestedSponsorsBlock"
import HeaderMobilePopup from "./HeaderMobilePopup/HeaderMobilePopup"

const Header = ({headerBorder}) => {
  const [popupVisibility, setPopupVisibility] = useState(false)

  const changeVisibility = () => {
    setPopupVisibility(!popupVisibility)
  }

  return (
    <header>
      {popupVisibility ? <HeaderMobilePopup changeVisibility={changeVisibility} /> : null}
      <HeaderTop>
        <Container>
          <HeaderTopInner>
            <nav>
              <BurgerBtn type="button" aria-label="click to open menu" onClick={changeVisibility}>
                <span />
                <span />
                <span />
              </BurgerBtn>
              <NavList>
                <NavItem>
                  <Link to="/sponsors" activeStyle={activeStyles} partiallyActive={true}>Sponsors</Link>
                  <NestedSponsorsBlock />
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
            </nav>
            <HeaderTopLink to="/upcoming-events">TOP FORUM CLUB</HeaderTopLink>
          </HeaderTopInner>
        </Container>
      </HeaderTop>
      <HeaderBottom headerBorder={headerBorder}>
        <Container>
          <HeaderBottomInner>
            <HeaderBottomInfo>
              <Logo />
              <HeaderBottomList>
                <HeaderBottomItem>
                  <StaticImage
                    src="../../images/icons/upcoming-events-icon.png"
                    alt="upcoming events icon"
                    width={37}
                    height={37}
                    placeholder="tracedSVG"
                    style={{marginRight: "12px"}}
                  />
                  <HeaderBottomLink to="/upcoming-events">UPCOMING EVENTS</HeaderBottomLink>
                </HeaderBottomItem>
                <HeaderBottomItem>
                  <StaticImage
                    src="../../images/icons/contacts-icon.png"
                    alt="contacts"
                    width={37}
                    height={37}
                    placeholder="tracedSVG"
                    style={{marginRight: "12px"}}
                  />
                  <HeaderBottomLink to="/contacts">CONTACTS</HeaderBottomLink>
                </HeaderBottomItem>
              </HeaderBottomList>
            </HeaderBottomInfo>
            <RegisterLink to="/register">REGISTER NOW</RegisterLink>
          </HeaderBottomInner>
        </Container>
      </HeaderBottom>
    </header>
  )
}

const HeaderTop = styled.div`
  position: relative;
  background-color: #323232;
  z-index: 2;
`

const HeaderTopInner = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 800px) {
    min-height: 70px;
  }
`

const NavList = styled.ul`
  display: flex;
  
  @media (max-width: 800px) {
    display: none;
  }
`

const BurgerBtn = styled.button`
  padding: 0;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 25px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  
  span {
    width: 100%;
    height: 3px;
    background-color: #c99c47;
  }
  
  @media (max-width: 800px) {
    display: flex;
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
  &:hover > ul {
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

const HeaderBottom = styled.div`
  ${props => props.headerBorder &&`
    border-bottom: 1px solid #d6d6d6;
  `}
`

const HeaderBottomInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 95px;
  
  @media (max-width: 800px) {
    justify-content: space-between;
  }
`

const HeaderBottomInfo = styled.div`
  display: flex;
  align-items: center;
`

const HeaderBottomList = styled.ul`
  display: flex;
  margin-left: 45px;

  @media (max-width: 800px) {
    display: none;
  }
`

const HeaderBottomItem = styled.li`
  display: flex;
  align-items: center;
  & + & {
    margin-left: 35px;
  }
`

const HeaderBottomLink = styled(Link)`
  position: relative;
  font-size: 15px;
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: auto;
    width: 0;
    height: 1px;
    background-color: #656565;
    transition: width 0.2s cubic-bezier(.27,.31,.29,.99);
  }
  &:hover::before {
    width: 100%;
  }
`


export default Header