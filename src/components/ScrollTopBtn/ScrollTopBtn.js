import React from "react"
import styled from "styled-components"
import ScrollImg from "../../images/icons/scroll-top.png"

const ScrollTopBtn = () => {
  const handleTopScroll = () => {
    window.scrollTo(0, 0)
  }

  return (
    <ScrollTopBtnStyled type="button" aria-label="scroll to top" onClick={handleTopScroll}>
      <img src={ScrollImg} alt="scroll to top" />
    </ScrollTopBtnStyled>
  )
}

const ScrollTopBtnStyled = styled.button`
  position: fixed;
  right: 160px;
  top: 50%;
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 10;
  
  @media (max-width: 1700px) {
    right: 50px;
    top: auto;
    bottom: 100px;
  }
  
  @media (max-width: 767px) {
    bottom: 50px;
  }
`

export default ScrollTopBtn