import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Logo = () => (
  <Link to="/">
    <StaticImage
      src="../../images/icons/logo.png" alt="top forum logo"
      width={165}
      height={64}
      placeholder="tracedSVG"
    />
  </Link>
)

export default Logo