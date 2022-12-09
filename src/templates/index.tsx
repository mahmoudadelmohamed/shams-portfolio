import React from "react"
import { ParallaxProvider } from "react-scroll-parallax"
import { HomeWrapper } from "../components/HomeWrapper"
import { PageProps } from "../context/DBContext"
import { DBProvider } from "../context/DBProvider"

const IndexPage: React.FC<PageProps> = (props) => {
  const {pageContext: {dbValue}} = props

  return (
    <DBProvider>
      <ParallaxProvider>
        <HomeWrapper dbValue={dbValue}/>
      </ParallaxProvider>
    </DBProvider>
  )
}

export default IndexPage;
