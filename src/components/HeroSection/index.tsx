import React from "react";
import { Navbar } from "../Navbar";
import './styles.sass';
import { HeroSectionProps } from "./types";

export const HeroSection: React.FC<HeroSectionProps> = (props) => {
  const {
    links,
  } = props;
  
  return (
    <>
      <Navbar
        links={links}
      />
    </>
  )
}