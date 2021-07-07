import React from "react"
import styled from "styled-components"
import CloseIcon from '../../../images/icons/close-modal.png'

const HeaderMobilePopup = ({changeVisibility}) => {
  return (
    <HeaderMobilePopupStyled>
      <h1>Lorem ipsum dolor sit amet.</h1>
      <h1>Lorem ipsum dolor sit amet.</h1>
      <h1>Lorem ipsum dolor sit amet.</h1>
      <button onClick={changeVisibility}>
        <img src={CloseIcon} alt="close popup" />
      </button>
    </HeaderMobilePopupStyled>
  )
}

const HeaderMobilePopupStyled = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #323232;
  color: #fff;
  z-index: 100;
`

export default HeaderMobilePopup