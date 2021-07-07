import React from "react"
import Layout from "../../components/Layout/Layout"
import Seo from "../../components/Seo/Seo"
import MapContacts from "../../components/ContactsPage/MapContacts"
import ContactsFeedback from "../../components/ContactsPage/ContactsFeedback"

const Index = () => (
  <Layout headerBorder>
    <Seo title="Our contacts | Top forum 2021" />
    <MapContacts />
    <ContactsFeedback />
  </Layout>
)

export default Index