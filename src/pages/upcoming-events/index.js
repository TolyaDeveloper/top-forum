import React from "react"
import Layout from "../../components/Layout/Layout"
import Seo from "../../components/Seo/Seo"
import AllEvents from "../../components/EventsPage/AllEvents"

const Index = () => {
  return (
    <Layout headerBorder>
      <Seo title="Our all events | Top forum 2021" />
      <AllEvents />
    </Layout>
  )
}

export default Index