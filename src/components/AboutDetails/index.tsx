import React from "react";
import { Testimonials } from "../Testimonials";
import './styles.scss';
import { Brands } from "../Brands";
import { Synonyms } from "../Synonyms";
import { PageProps } from "./types";

export const AboutDetails: React.FC<PageProps> = (props) => {
  const { dbValue } = props;
  return (
    <>
      <Synonyms dbValue={dbValue}/>
      <Testimonials peopleRecommendation={dbValue.peopleRecommendMe} />
      <Brands dbValue={dbValue} />
    </>

  )
}