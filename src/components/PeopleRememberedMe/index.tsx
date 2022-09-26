import React from "react";
import { PEOPLE_RECOMMEND_ME_SECTION_SLIDER_SETTINGS } from "../../constant";
import { useDB } from "../../hooks/useDB";
import { CustomSlider } from "../CustomSlider";
import { SectionWrapper } from "../SectionWrapper";
import { PeopleCard } from "./PeopleCard";

export const PeopleRememberedMe: React.FC = () => {
  const db = useDB();

  let peopleRecommendation = db.peopleRecommendMe ? db.peopleRecommendMe?.map((item) => {
    return item;
  }) : [];

  return (
    <SectionWrapper
      title={'People Remembered Me.'}
      styles={{
        margin: '0 75px 0 75px',
      }}
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