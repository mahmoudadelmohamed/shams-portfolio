import React, { useState } from "react";
import { Navbar } from "../Navbar";
import './styles.sass';

export const HeroSection: React.FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Navbar />
      <div>
        <h1 style={{
          lineHeight: 1
        }}>Are <br /> you <br /> Ready? </h1>
      </div>
    </>
  )
}