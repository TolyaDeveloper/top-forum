import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import Container from "../UI/Container"
import LinkStyled from "../UI/Link"
import {StaticImage} from "gatsby-plugin-image"
import Logo from "../UI/Logo"

const Header = () => {
  return (
    <header>
      <HeaderTop>
        <Container>
          <HeaderTopInner>
            <nav>
              <NavList>
                <NavItem>
                  <Link to="/sponsors">Sponsors</Link>
                  <NavListNested>
                    <NavItemNested>
                      <Link to="/sponsors/general-sponsor">General Sponsor</Link>
                    </NavItemNested>
                    <NavItemNested>
                      <Link to="/sponsors/platinum-sponsor">Platinum Sponsor</Link>
                    </NavItemNested>
                    <NavItemNested>
                      <Link to="/sponsors/high-tech-sponsor">High-Tech Sponsor</Link>
                    </NavItemNested>
                    <NavItemNested>
                      <Link to="/sponsors/gold-sponsor">Gold Sponsor</Link>
                    </NavItemNested>
                    <NavItemNested>
                      <Link to="/sponsors/silver-night-sponsor">Silver Night Sponsor</Link>
                    </NavItemNested>
                  </NavListNested>
                </NavItem>
                <NavItem>
                  <Link to="/exhibitors">Exhibitors</Link>
                </NavItem>
                <NavItem>
                  <Link to="/speakers">Speakers</Link>
                </NavItem>
                <NavItem>
                  <Link to="/media">Media</Link>
                </NavItem>
              </NavList>
            </nav>
            <TopHeaderLink $fixed to="/upcoming-events">TOP FORUM CLUB</TopHeaderLink>
          </HeaderTopInner>
        </Container>
      </HeaderTop>
      <HeaderBottom>
        <Container>
          <HeaderBottomInner>
            <HeaderBottomInfo>
              <Logo />
              <HeaderBottomList>
                <HeaderBottomItem>
                  <StaticImage
                    src="../../images/icons/upcoming-events-icon.png"
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
                    src="../../images/icons/contacts-icon.png"
                    alt="contacts"
                    width={37}
                    height={37}
                    placeholder="tracedSVG"
                    style={{marginRight: "12px"}}
                  />
                  <HeaderBottomLink to="/contacts">CONTACTS</HeaderBottomLink>
                </HeaderBottomItem>
              </HeaderBottomList>
            </HeaderBottomInfo>
            <LinkStyled $fixed to="/register">REGISTER NOW</LinkStyled>
          </HeaderBottomInner>
        </Container>
      </HeaderBottom>
    </header>
  )
}

const HeaderTop = styled.div`
  position: relative;
  background-color: #323232;
  z-index: 2;
`

const HeaderTopInner = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavList = styled.ul`
  display: flex;
`

const NavListNested = styled.ul`
  position: absolute;
  top: 67px;
  background-color: #fff;
  border: 1px solid #d6d6d6;
  z-index: 9999;
  width: 290px;
  min-height: 240px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(100px);
  transition: all .3s ease;
`

const NavItem = styled.li`
  position: relative;
  a {
    position: relative;
    padding: 20px;
    color: #fff;
    font-size: 15px;
    line-height: 1.76;
    transition: background-color 0.2s ease-in;
    &:hover {
      background-color: #212121;
    }
  }
  &:hover > ul {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  & + & {
    a:before {
      content: '';
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      width: 1px;
      height: 35px;
      background-color: #474747;
    }
  }
`

const NavItemNested = styled.li`
  a {
    display: block;
    color: #323232;
    padding: 10px 20px;
    &:hover {
      background-color: #d6d6d6;
    }
  }
`

const TopHeaderLink = styled(LinkStyled)`
  background-color: #e8d8b6;
  color: #323232;
`

const HeaderBottom = styled.div`
  ${props => props.borderBottom &&`
    border-bottom: 1px solid #d6d6d6;
  `}
`

const HeaderBottomInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 95px;
`

const HeaderBottomInfo = styled.div`
  display: flex;
  align-items: center;
`

const HeaderBottomList = styled.ul`
  display: flex;
  margin-left: 45px;
`

const HeaderBottomItem = styled.li`
  display: flex;
  align-items: center;
  & + & {
    margin-left: 35px;
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
`


export default Header