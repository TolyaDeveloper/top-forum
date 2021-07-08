import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NestedSponsorsMobileBlock = () => {
  return (
    <NestedMobile>
      <NestedMobileItem>
        <NestedMobileLink to="/sponsors" activeStyle={activeStyles}>All Sponsors</NestedMobileLink>
      </NestedMobileItem>
      <NestedMobileItem>
        <NestedMobileLink to="/sponsors/general-sponsor" activeStyle={activeStyles}>General Sponsor</NestedMobileLink>
      </NestedMobileItem>
      <NestedMobileItem>
        <NestedMobileLink to="/sponsors/platinum-sponsor" activeStyle={activeStyles}>Platinum Sponsor</NestedMobileLink>
      </NestedMobileItem>
      <NestedMobileItem>
        <NestedMobileLink to="/sponsors/high-tech-sponsor" activeStyle={activeStyles}>High-Tech Sponsor</NestedMobileLink>
      </NestedMobileItem>
      <NestedMobileItem>
        <NestedMobileLink to="/sponsors/marmot-sponsor" activeStyle={activeStyles}>Gold Sponsor</NestedMobileLink>
      </NestedMobileItem>
      <NestedMobileItem>
        <NestedMobileLink to="/sponsors/silver-night-sponsor" activeStyle={activeStyles}>Silver Night Sponsor</NestedMobileLink>
      </NestedMobileItem>
    </NestedMobile>
  )
}

const NestedMobile = styled.ul``

const activeStyles = {
  backgroundColor: '#212121'
}

const NestedMobileItem = styled.li`
  a {
    padding-left: 40px!important;
  }
`

const NestedMobileLink = styled(Link)``

export default NestedSponsorsMobileBlock