import React from "react"
import Layout from "../../components/Layout/Layout"
import Seo from "../../components/Seo/Seo"
import MapContacts from "../../components/ContactsPage/MapContacts"

const Index = () => {
  return (
    <Layout headerBorder>
      <Seo title="Our contacts | Top forum 2021" />
      <MapContacts />
    </Layout>
  )
}

export default Index