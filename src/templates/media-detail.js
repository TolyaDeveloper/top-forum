import React from "react"
import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo/Seo"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Container from "../components/UI/Container"

const MediaDetail = ({data}) => {
  const {articleTitle, featuredImage} = data.markdownRemark.frontmatter

  return (
    <Layout headerBorder>
      <Seo title={articleTitle} />
      <Container>
        <h1>Example page</h1>
        <GatsbyImage alt={articleTitle} image={getImage(featuredImage)} />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query MediaPage($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      frontmatter {
        articleTitle
        featuredImage {
          childImageSharp {
            gatsbyImageData(
              width: 360
              height: 220
              webpOptions: {quality: 80}
              quality: 80
              layout: CONSTRAINED
              placeholder: BLURRED
            )
          }
        }
      }
    }
  }
`

export default MediaDetail