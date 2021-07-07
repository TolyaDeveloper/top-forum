import React from "react"
import Layout from "../../components/Layout/Layout"
import Seo from "../../components/Seo/Seo"
import Registers from "../../components/RegisterPage/Registers"

const Index = () => (
  <Layout headerBorder>
    <Seo title="Register | Top forum 2021" />
    <Registers />
  </Layout>
)

export default Index