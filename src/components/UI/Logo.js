import React from "react"
import {StaticImage} from "gatsby-plugin-image"
import {Link} from "gatsby"

const Logo = () => {
  return (
    <Link className="logo" to="/">
      <StaticImage
        src="../../images/icons/logo.png" alt="main logo"
        width={165}
        height={64}
        placeholder="tracedSVG"
      />
    </Link>
  )
}

export default Logo