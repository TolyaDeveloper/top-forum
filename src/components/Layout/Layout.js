import React from "react"
import '../UI/fonts.css'
import GlobalStyles from "../UI/GlobalStyles"
import Header from "../Header/Header"

const Layout = ({children}) => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Header />
      {children}
    </React.Fragment>
  )
}

export default Layout