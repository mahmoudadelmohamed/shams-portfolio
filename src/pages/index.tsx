import React from "react"
import { Footer } from "../components/Footer"
import { HomeWrapper } from "../components/HomeWrapper"
import { DBProvider } from "../context/DBProvider"

const IndexPage = () => {

  return (
    <DBProvider>
      <HomeWrapper />
      <Footer />
    </DBProvider>
  )
}

export default IndexPage;
