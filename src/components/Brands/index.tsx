import React from "react";
import { PROJECTS_SECTION_SLIDER_SETTINGS } from "../../constant";
import { useDB } from "../../hooks/useDB";
import { CustomSlider } from "../CustomSlider";
import { SectionWrapper } from "../SectionWrapper";
import { BrandCard } from "./BrandCard";

export const Brands: React.FC = () => {
  const db = useDB();
  const brandsImage = db.brands ? db.brands.map((item) => db.images[item.id].image) : [];

  return (
    <SectionWrapper
      title={'Worked With'}
    >
      <CustomSlider
        settings={PROJECTS_SECTION_SLIDER_SETTINGS}
        styles={{
          width: '100%',
        }}
      >
      {brandsImage.map((item, index) =>  <BrandCard image={item} key={`${item}-${index}`}/>)}
      </CustomSlider>
    </SectionWrapper>
  )
}