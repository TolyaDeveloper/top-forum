import React from "react"
import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo/Seo"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Container from "../components/UI/Container"

const SpeakerDetail = ({data}) => {
  const {personName, featuredImage} = data.markdownRemark.frontmatter

  return (
    <Layout headerBorder>
      <Seo title={personName} />
      <Container>
        <h1>Example page</h1>
        <GatsbyImage alt={personName} image={getImage(featuredImage)} />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query SpeakersPage($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      frontmatter {
        personName
        featuredImage {
          childImageSharp {
            gatsbyImageData(
              width: 135
              height: 135
              layout: FIXED
              quality: 80
              webpOptions: {quality: 80}
              placeholder: BLURRED
            )
          }
        }
      }
    }
  }
`

export default SpeakerDetail