import React from "react"
import { ParallaxProvider } from "react-scroll-parallax"
import { HomeWrapper } from "../components/HomeWrapper"
import { DBProvider } from "../context/DBProvider"

const IndexPage: React.FC<any> = (props) => {
  const {pageContext: {homeCards, links}} = props;

  return (
    <DBProvider>
      <ParallaxProvider>
        <HomeWrapper 
          homeCards={homeCards}
          links={links}
          />
      </ParallaxProvider>
    </DBProvider>
  )
}

export default IndexPage;
