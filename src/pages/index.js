import * as React from "react"
import Layout from "../components/public-components/layout/layout"
import Seo from "../components/public-components/header/seo"
import Banner from "../components/public-components/banner/banner"
import NavTabs from "../components/public-components/navigations/nav-tabs"

const IndexPage = () => {
  return (
  <Layout>
    <Seo title="Home" />
    <Banner />
    <NavTabs />
  </Layout>
)
}


export const Head = () => <Seo title="Home" />

export default IndexPage
