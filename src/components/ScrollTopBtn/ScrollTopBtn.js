import React from "react"
import styled from "styled-components"
import scrollImg from "../../images/icons/scroll-top.png"

const ScrollTopBtn = () => {
  const handleTopScroll = () => {
    window.scrollTo(0, 0)
  }

  return (
    <ScrollTopBtnStyled type="button" aria-label="scroll to top" onClick={handleTopScroll}>
      <img src={scrollImg} alt="scroll to top" />
    </ScrollTopBtnStyled>
  )
}

const ScrollTopBtnStyled = styled.button`
  position: fixed;
  z-index: 10;
  right: 160px;
  top: 50%;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
`

export default ScrollTopBtn