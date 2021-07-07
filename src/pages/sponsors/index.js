import React from "react"
import Layout from "../../components/Layout/Layout"
import Seo from "../../components/Seo/Seo"
import AllSponsors from "../../components/SponsorsPage/AllSponsors"

const Index = () => (
  <Layout headerBorder>
    <Seo title="Our all sponsors | Top forum 2021" />
    <AllSponsors />
  </Layout>
)

export default Index