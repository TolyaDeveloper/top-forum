import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Link } from "gatsby"

const HeaderBottomItems = () => {
  return (
    <HeaderBottomList>
      <HeaderBottomItem>
        <StaticImage
          src="../../../images/icons/upcoming-events-icon.png"
          alt="upcoming events icon"
          width={37}
          height={37}
          placeholder="tracedSVG"
          style={{marginRight: "12px"}}
        />
        <HeaderBottomLink to="/upcoming-events">UPCOMING EVENTS</HeaderBottomLink>
      </HeaderBottomItem>
      <HeaderBottomItem>
        <StaticImage
          src="../../../images/icons/contacts-icon.png"
          alt="contacts"
          width={37}
          height={37}
          placeholder="tracedSVG"
          style={{marginRight: "12px"}}
        />
        <HeaderBottomLink to="/contacts">CONTACTS</HeaderBottomLink>
      </HeaderBottomItem>
    </HeaderBottomList>
  )
}

const HeaderBottomList = styled.ul`
  display: flex;
  margin-left: 45px;

  @media (max-width: 800px) {
    display: none;
    text-align: right;
    padding-right: 15px;
  }
`

const HeaderBottomItem = styled.li`
  display: flex;
  align-items: center;
  & + & {
    margin-left: 35px;
  }
  
  @media (max-width: 800px) {
    & {
      margin-top: 30px;
    }
    & + & {
      margin: 15px 0 0 0;
    }
    img {
      display: none!important;
    }
  }
`

const HeaderBottomLink = styled(Link)`
  position: relative;
  font-size: 15px;
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: auto;
    width: 0;
    height: 1px;
    background-color: #656565;
    transition: width 0.2s cubic-bezier(.27,.31,.29,.99);
  }
  &:hover::before {
    width: 100%;
  }
  
  @media (max-width: 800px) {
    display: inline;
    &::before {
      display: none;
    }
  }
`

export default HeaderBottomItems