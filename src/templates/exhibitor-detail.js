import React from "react"
import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo/Seo"
import { graphql } from "gatsby"
import Container from "../components/UI/Container"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ExhibitorDetail = ({data}) => {
  const {companyName, featuredImage} = data.markdownRemark.frontmatter

  return (
    <Layout>
      <Seo title={companyName} />
      <Container>
        <h1>example page</h1>
        <div>
          {companyName}
        </div>
        <GatsbyImage alt={companyName} image={getImage(featuredImage)} />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query ExhibitorsPage($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      frontmatter {
        companyName
        featuredImage {
          childImageSharp {
            gatsbyImageData(webpOptions: {quality: 75}, quality: 75, placeholder: BLURRED)
          }
        }
      }
    }
  }
`

export default ExhibitorDetail