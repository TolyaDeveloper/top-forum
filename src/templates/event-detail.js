import React from "react"
import Seo from "../components/Seo/Seo"
import Layout from "../components/Layout/Layout"
import {graphql} from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Container from "../components/UI/Container"

const EventDetail = ({data}) => {
  const {featuredImage} = data.markdownRemark.frontmatter

  return (
    <Layout>
      <Seo title="event name" />
      <Container>
        <h1>Example page</h1>
        <GatsbyImage alt="event name" image={getImage(featuredImage)} />
      </Container>

    </Layout>
  )
}

export const query = graphql`
  query EventsPage($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      frontmatter {
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

export default EventDetail