import React from "react"
import '../UI/fonts.css'
import GlobalStyles from "../UI/GlobalStyles"

const Layout = ({children}) => {
  return (
    <React.Fragment>
      <GlobalStyles />
      {children}
    </React.Fragment>
  )
}

export default Layout