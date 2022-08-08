import React from "react"
import { HomeWrapper } from "../components/HomeWrapper"
import { DBProvider } from "../context/DBProvider"

const IndexPage = () => {

  return (
    <DBProvider>
      <HomeWrapper />
    </DBProvider>

  )
}

export default IndexPage;
