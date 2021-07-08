import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Container from "../UI/Container"
import { HeaderTopLink, RegisterLink } from "../UI/Links"
import Logo from "../UI/Logo"
import HeaderMobilePopup from "./HeaderMobilePopup/HeaderMobilePopup"
import NavItems from "./NavItems/NavItems"
import HeaderBottomItems from "./HeaderBottomItems/HeaderBottomItems"

const Header = ({headerBorder}) => {
  const [popupVisibility, setPopupVisibility] = useState(false)

  const changeVisibility = () => {
    setPopupVisibility(!popupVisibility)
  }

  useEffect(() => {
    popupVisibility ? document.body.style.overflow = "hidden": document.body.style.overflow = "visible"
  }, )

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
              <NavItems />
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
              <HeaderBottomItems />
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

export default Header