import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Container from "../UI/Container"

const Footer = () => (
  <FooterStyled>
    <Container>
      <FooterNav>
        <FooterNavInner>
          <FooterNavBlock>
            <FooterNavTitle>TOP FORUM</FooterNavTitle>
            <ul>
              <FooterNavItem>
                <Link to="/sponsors">Sponsors</Link>
              </FooterNavItem>
              <FooterNavItem>
                <Link to="/exhibitors">Exhibitors</Link>
              </FooterNavItem>
              <FooterNavItem>
                <Link to="speakers">Speakers</Link>
              </FooterNavItem>
              <FooterNavItem>
                <Link to="media">Media</Link>
              </FooterNavItem>
            </ul>
          </FooterNavBlock>
          <FooterNavBlock>
            <FooterNavTitle>CONTACT</FooterNavTitle>
            <ul>
              <FooterNavItem>
                <Link to="/">Top Forum Group</Link>
              </FooterNavItem>
              <FooterNavItem>
                <AddressBlock>
                  <Link to="/">Trnavska cesta 82, 821 02 Bratislava, Slovakia</Link>
                </AddressBlock>
              </FooterNavItem>
            </ul>
            <ul style={{marginTop: "45px"}}>
              <FooterNavItem>
                <a href="tel:+421221025322">+421 221 025 322</a>
              </FooterNavItem>
              <FooterNavItem>
                <EmailLink href="mailto:info@topforum.com">info@topforum.com</EmailLink>
              </FooterNavItem>
            </ul>
          </FooterNavBlock>
        </FooterNavInner>
        <FollowButton type="button">FOLLOW US</FollowButton>
      </FooterNav>
      <Divider />
      <p className="copyright">All rights reserved 2021. @anatoliiharhash</p>
    </Container>
  </FooterStyled>
)

const FooterStyled = styled.footer`
  padding: 45px 0;
  background-color: #323232;
`

const FooterNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: start;
`

const FooterNavInner = styled.div`
  display: flex;
`

const FooterNavBlock = styled.div`
  padding-right: 60px;
  & + & {
    position: relative;
    padding-left: 60px;
    &::before {
      content: '';
      position: absolute;
      top: -8px;
      left: 0;
      width: 1px;
      height: calc(100% + 50px);
      background-color: #464645;
    }
  }
`

const FooterNavTitle = styled.h3`
  margin-bottom: 18px;
  color: #c99c47;
  font-weight: 400;
`

const FooterNavItem = styled.li`
  margin-bottom: 15px;
  color: #fff;
  transition: opacity 0.2s ease-in;
  &:hover {
    opacity: 0.7;
  }
`

const AddressBlock = styled.address`
  font-style: normal;
`

const FollowButton = styled.button`
  color: #c99c47;
  background-color: transparent;
  border: none;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  cursor: pointer;
  transition: opacity 0.2s ease-in;
  &:hover {
    opacity: 0.7;
  }
`

const EmailLink = styled.a`
  text-decoration: underline;
`

const Divider = styled.div`
  margin-top: 20px;
  width: 100%;
  background-color: #464645;
`

export default Footer