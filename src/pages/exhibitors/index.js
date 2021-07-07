import React from "react"
import Layout from "../../components/Layout/Layout"
import Seo from "../../components/Seo/Seo"
import AllExhibitors from "../../components/ExhibitorsPage/AllExhibitors"

const Index = () => (
  <Layout headerBorder>
    <Seo title="Our all exhibitors | Top forum 2021" />
    <AllExhibitors />
  </Layout>
)

export default Index