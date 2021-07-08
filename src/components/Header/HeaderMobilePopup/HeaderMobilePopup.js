import React from "react"
import styled, { keyframes } from "styled-components"
import NavItems from "../NavItems/NavItems"
import HeaderBottomItems from "../HeaderBottomItems/HeaderBottomItems"

const HeaderMobilePopup = () => {
  return (
    <HeaderMobilePopupStyled>
      <NavItems mobile />
      <HeaderBottomItems />
    </HeaderMobilePopupStyled>
  )
}

const HeaderMobileAnimation = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const HeaderMobilePopupStyled = styled.div`
  position: absolute;
  overflow-y: auto;
  top: 70px;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: #323232;
  color: #fff;
  z-index: 100;
  animation: ${HeaderMobileAnimation} .2s ease-out;
  
  ul {
    display: block;
  }
  
   a {
    width: 100%;
   }
  
  @media (min-width: 801px) {
    display: none;
  }
`

export default HeaderMobilePopup