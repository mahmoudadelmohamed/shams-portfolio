import React from "react"
import { Test } from "../components/Test"
import { DBProvider } from "../context/DBProvider"

const IndexPage = () => {

  return (
    <DBProvider>
      <Test />
    </DBProvider>

  )
}

export default IndexPage;
