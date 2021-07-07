import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Logo = () => (
  <LogoLink to="/">
    <StaticImage
      src="../../images/icons/logo.png" alt="top forum logo"
      width={165}
      height={64}
      placeholder="tracedSVG"
    />
  </LogoLink>
)

const LogoLink = styled(Link)`
  @media (max-width: 440px) {
    img {
      width: 110px;
    }
  }
`

export default Logo