import React from "react";
import { SectionWrapper } from "../SectionWrapper";

export const Footer: React.FC = () => {
  return (
    <SectionWrapper>
      <footer style={{
        backgroundColor: '#F9FAFB',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 32,
        height: 500,
        margin: 8
      }}>
        <section style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          backgroundColor: 'red',
          height: '80%',
          width:' 20%'
      }}>
          <h3>Shams Nabile</h3>
          <p>This is the end This is the end This is the end
          This is the end This is the end This is the endThis is the end This is the end This is the end
          This is the end This is the end This is the end
          </p>
          <p>Good</p>
        </section>

        <section 
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          backgroundColor: 'red',
          height: '80%',
          width:' 20%'
      }}
        >
          <h3>Shams Nabile</h3>
          <p>Good</p>
          <p>Good</p>
        </section>
        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            backgroundColor: 'red',
            height: '80%',
            width:' 20%'
        }}
        >
          <h3>Shams Nabile</h3>
          <p>Good</p>
          <p>Good</p>
        </section>
        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            backgroundColor: 'red',
            height: '80%',
            width:' 20%'
        }}
        >
          <h3>Shams Nabile</h3>
          <p>Good</p>
          <p>Good</p>
        </section>

      </footer>
    </SectionWrapper>
  )
}