import * as React from "react"
import Layout from "../components/public-components/layout/layout"
import Seo from "../components/public-components/header/seo"
import Banner from "../components/public-components/banner/banner"
import PredictionTable from "../components/public-components/predictionTable/predictionTable"

const IndexPage = () => {
  console.log(process.env)
  return (
  <Layout>
    <Seo title="Home" />
    <Banner />
    <PredictionTable />
  </Layout>
)
}


export const Head = () => <Seo title="Home" />

export default IndexPage
