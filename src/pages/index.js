import React from "react"
import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo/Seo"
import BannerSection from "../components/IndexPage/BannerSection"
import InfoSection from "../components/IndexPage/InfoSection"
import ReviewsSection from "../components/IndexPage/ReviewsSection/ReviewsSection"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home page | Top forum 2021" />
      <BannerSection />
      <InfoSection />
      <ReviewsSection />
    </Layout>
  )
}

export default IndexPage