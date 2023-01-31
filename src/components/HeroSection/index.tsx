import React, { useState } from "react";
import { MenuContext } from "../../context/MenuContext";
import { Menu } from "../Menu";
import './styles.sass';

export const HeroSection: React.FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <MenuContext.Provider
      value={{ open, setOpen, }}
    >
      <Menu />
      <div className="main-container">
        <h1 style={{
          lineHeight: 1
        }}>Are <br /> you <br /> Ready? </h1>
      </div>
    </MenuContext.Provider>
  )
}