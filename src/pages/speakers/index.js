import React from "react"
import Layout from "../../components/Layout/Layout"
import Seo from "../../components/Seo/Seo"
import AllSpeakers from "../../components/SpeakersPage/AllSpeakers"

const Index = () => {
  return (
    <Layout>
      <Seo title="Our all speakers | Top forum 2021" />
      <AllSpeakers />
    </Layout>
  )
}

export default Index