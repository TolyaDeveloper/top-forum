import React from "react"
import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo/Seo"
import BannerSection from "../components/IndexPage/BannerSection"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home page | Top forum 2021" />
      <BannerSection />
    </Layout>
  )
}

export default IndexPage