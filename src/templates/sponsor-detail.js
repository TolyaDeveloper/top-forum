import React from "react"
import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo/Seo"
import { graphql } from "gatsby"
import Container from "../components/UI/Container"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const SponsorDetail = ({data}) => {
  const {html} = data.markdownRemark
  const {companyName, featuredImage} = data.markdownRemark.frontmatter

  return (
    <Layout headerBorder>
      <Seo title={companyName} />
      <SponsorDetailStyled>
        <Container>
          <SponsorDetailInner>
            example page
            <SponsorDetailTitle>{companyName}</SponsorDetailTitle>
            <SponsorDetailText dangerouslySetInnerHTML={{__html: html}} />
            <GatsbyImage alt={companyName} image={getImage(featuredImage)} />
          </SponsorDetailInner>
        </Container>
      </SponsorDetailStyled>
    </Layout>
  )
}

export const query = graphql`
  query SponsorsPage($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        companyName
        featuredImage {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

const SponsorDetailStyled = styled.article`
  padding: 50px 0 65px 0;
`

const SponsorDetailInner = styled.div`
  text-align: center;
`

const SponsorDetailTitle = styled.h2`
  margin-bottom: 20px;
  font-weight: 500;
  text-transform: uppercase;
`

const SponsorDetailText = styled.div`
  margin-bottom: 30px;
`

export default SponsorDetail