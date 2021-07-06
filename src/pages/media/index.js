import React from "react"
import Layout from "../../components/Layout/Layout"
import Seo from "../../components/Seo/Seo"
import AllMedia from "../../components/MediaPage/AllMedia"

const Index = () => {
  return (
    <Layout headerBorder>
      <Seo title="Our all media articles | Top forum 2021" />
      <AllMedia />
    </Layout>
  )
}

export default Index