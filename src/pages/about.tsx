import React from "react";
import { AboutProjects } from "../components/AboutProjects";
import { SectionWrapper } from "../components/SectionWrapper";
{/* 
https://firebasestorage.googleapis.com/v0/b/testing-95f9a.appspot.com/o/shams_2.jpg?alt=media&token=663e5232-8341-48e7-87f3-6dd8009e56eb
https://firebasestorage.googleapis.com/v0/b/testing-95f9a.appspot.com/o/shams_1.jpg?alt=media&token=f452ed09-bc52-429d-a467-242df8146c4d
*/}
const About = () => {
  return (
    <SectionWrapper
      styles={{
        margin: '0 180px 0 180px'
      }}
    >
      <section style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <div>
          <div style={{
              width: '75%'
}}>
            <h1>Supported By Shark and Shrimp and Contributed With... </h1>
          </div>
          <AboutProjects />
        </div>
        <div style={{
        }}>
          <img
            style={{
              borderRadius: 32,
              width: 800,
              height: '100%',
            }}
            src={'https://firebasestorage.googleapis.com/v0/b/testing-95f9a.appspot.com/o/shams_1.jpg?alt=media&token=f452ed09-bc52-429d-a467-242df8146c4d'}
          />
        </div>
      </section>

    </SectionWrapper>
  )
}
export default About;