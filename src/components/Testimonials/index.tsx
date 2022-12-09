import React from "react";
import { PEOPLE_RECOMMEND_ME_SECTION_SLIDER_SETTINGS } from "../../constant";
import { CustomSlider } from "../CustomSlider";
import { SectionWrapper } from "../SectionWrapper";
import { PeopleCard } from "./PeopleCard";
import { TestimonialProps } from "./types";

export const Testimonials: React.FC<TestimonialProps> = (props) => {
  const { peopleRecommendation } = props;
  
  return (
    <SectionWrapper
      title={'Testimonials'}
      withTitle={true}
    >
      <CustomSlider
        settings={PEOPLE_RECOMMEND_ME_SECTION_SLIDER_SETTINGS}
        styles={{
          width: '100%',
        }}
      >
        {peopleRecommendation?.map((item, index) => (
          <PeopleCard
            item={{ ...item }}
            key={index}
          />
        ))}
      </CustomSlider>
    </SectionWrapper>
  )
}