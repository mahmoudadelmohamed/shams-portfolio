import React from "react";
import { AboutDetails } from "../components/AboutDetails";
import { DBProvider } from "../context/DBProvider";
import { AboutProps } from "./types";

const About: React.FC<AboutProps> = (props) => {
  const {
    pageContext: {
      brands,
      people,
      images,
      expectedFromMe,
      hobbies,
      staticText,
    }
  } = props;
  return (
    <DBProvider>
      <AboutDetails
        brands={brands}
        people={people}
        images={images}
        expectedFromMe={expectedFromMe}
        hobbies={hobbies}
        staticText={staticText}
      />
    </DBProvider>
  )
}
export default About;