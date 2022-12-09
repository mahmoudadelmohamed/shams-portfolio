import React from "react";
import { AboutDetails } from "../components/AboutDetails";
import { PageProps } from "../context/DBContext";
import { DBProvider } from "../context/DBProvider";

const About: React.FC<PageProps> = (props) => {
  const { pageContext: { dbValue } } = props;
  
  return (
    <DBProvider>
      <AboutDetails dbValue={dbValue} />
    </DBProvider>
  )
}
export default About;