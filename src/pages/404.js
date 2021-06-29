import React from "react"
import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo/Seo"
import Container from "../components/UI/Container"
import {StaticImage} from "gatsby-plugin-image"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Page Not found" />
    <Container>
      <StaticImage
        src="../images/icons/not-found-page-icon.svg"
        alt="not found page icon"
        width={200}
        height={210}
        placeholder="none"
        style={{margin: '50px'}}
      />
      <p style={{marginBottom: "30px", textAlign: "center"}}>Ooops.. Page not found. Try again</p>
    </Container>
  </Layout>
)

export default NotFoundPage