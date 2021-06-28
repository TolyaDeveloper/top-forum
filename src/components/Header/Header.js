import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import Container from "../UI/Container"

const Header = () => {
  return (
    <header>
      <HeaderTop>
        <Container>
          <HeaderTopInner>
            <nav className="menu">
              <ul className="menu__list">
                <li className="menu__item">
                  <Link className="menu__link" to="/sponsors">Sponsors</Link>
                </li>
                <li className="menu__item">
                  <Link className="menu__link" to="/exhibitors">Exhibitors</Link>
                </li>
                <li className="menu__item">
                  <Link className="menu__link" to="/speakers">Speakers</Link>
                </li>
                <li className="menu__item">
                  <Link className="menu__link" to="/media">Media</Link>
                </li>
              </ul>
            </nav>
            <a className="header-top__link" href="#">TOP FORUM CLUB</a>
          </HeaderTopInner>
        </Container>
      </HeaderTop>
      <div className="header__bottom">
        <div className="header__bottom-info">
          <Link className="logo" to="/">
            <img src="" alt="main logo" />
          </Link>
          <ul className="header__bottom-list">
            <li className="header__bottom-item">
              <img src="" alt="" />
              <Link to="/upcoming-events">UPCOMING EVENTS</Link>
            </li>
            <li className="header__bottom-item">
              <img src="" alt="" />
              <Link to="/contacts">CONTACTS</Link>
            </li>
          </ul>
        </div>
        <Link className="header__bottom-link" to="/register">REGISTER NOW</Link>
      </div>
    </header>
  )
}

const HeaderTop = styled.div`
  background-color: #323232;
`

const HeaderTopInner = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 55px;
`

const NavList = styled.ul`
  display: flex;
`

const NavItem = styled.li`
  & + & {
    position: relative;
    margin-left: 15px;
    padding-left: 15px;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      width: 1px;
      height: 35px;
      background-color: red;
    }
  }
`

export default Header