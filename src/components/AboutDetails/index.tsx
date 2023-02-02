import React from "react";
import { Testimonials } from "../Testimonials";
import './styles.scss';
import { Brands as BrandsImages } from "../Brands";
import { AboutDetailsProps } from "./types";
import { Synonyms } from "../Synonyms";


export const AboutDetails: React.FC<AboutDetailsProps> = (props) => {
  const {
    brands,
    people,
    images,
    expectedFromMe,
    hobbies,
    staticText,
  } = props;

  return (
    <>
      <Synonyms
        expectedFromMe={expectedFromMe}
        hobbies={hobbies}
        staticText={staticText}
      />
      <Testimonials
        peopleRecommendation={people}
      />
      <BrandsImages
        brands={brands}
        images={images}
      />
    </>

  )
}