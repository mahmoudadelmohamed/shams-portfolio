import React from "react"
import { ParallaxProvider } from "react-scroll-parallax"
import { Footer } from "../components/Footer"
import { HomeWrapper } from "../components/HomeWrapper"
import { DBProvider } from "../context/DBProvider"

const IndexPage = () => {

  return (
    <DBProvider>
      <ParallaxProvider>
        <HomeWrapper />
      </ParallaxProvider>
      {/* <Footer /> */}
    </DBProvider>
  )
}

export default IndexPage;
