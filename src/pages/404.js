import React from "react"
import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo/Seo"
import Container from "../components/UI/Container"
import NotFoundImg from '../images/icons/not-found-page-icon.svg'

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Page Not found" />
    <Container>
      <img src={NotFoundImg} style={{width: '210px', height: '210px'}} alt="page not found" />
      <p style={{marginBottom: "30px", textAlign: "center"}}>Ooops.. Page not found. Try again</p>
    </Container>
  </Layout>
)

export default NotFoundPage