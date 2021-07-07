import React from "react"
import '../UI/fonts.css'
import GlobalStyles from "../UI/GlobalStyles"
import '../UI/Slider/slick.css'
import 'focus-visible'
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import ScrollTopBtn from "../ScrollTopBtn/ScrollTopBtn"
import styled from "styled-components"

const Layout = ({children, headerBorder}) => (
  <FocusVisible className="js-focus-visible focus-visible">
    <GlobalStyles />
    <ScrollTopBtn />
    <Header headerBorder={headerBorder} />
    <main>{children}</main>
    <Footer />
  </FocusVisible>
)

const FocusVisible = styled.div`
  &.js-focus-visible button:focus:not(.focus-visible),
  &.js-focus-visible a:focus:not(.focus-visible),
  &.js-focus-visible input[type='checkbox']:focus:not(.focus-visible) {
    outline: none;
  }

  &.js-focus-visible .focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px #528deb;
  }
`

export default Layout