import React from "react";
import { SynonymsDetailsProps } from "./types";
import './styles.sass'
export const SynonymsDetails: React.FC<SynonymsDetailsProps> = (props) => {
  const {
    subTitle,
    title,
    className,
  } = props;
  return (
    <section className={className}>
      <h1 className="SynonymsDetailsTitle">{title}</h1>
      <p className="SynonymsDetailsSubtitle">{subTitle}</p>
    </section>
  )
}