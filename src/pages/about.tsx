import React from "react";
import { AboutDetails } from "../components/AboutDetails";
import { DBProvider } from "../context/DBProvider";

const About = () => {

  return (
    <DBProvider>
      <AboutDetails />
    </DBProvider>
  )
}
export default About;