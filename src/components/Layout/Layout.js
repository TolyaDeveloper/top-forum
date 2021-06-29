import React from "react"
import '../UI/fonts.css'
import GlobalStyles from "../UI/GlobalStyles"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

const Layout = ({children}) => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  )
}

export default Layout