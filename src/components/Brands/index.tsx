import React from "react";
import images from "../../assets";
import { PROJECTS_SECTION_SLIDER_SETTINGS } from "../../constant";
import { useImages } from "../../hooks/useImages";
import { CustomSlider } from "../CustomSlider";
import { SectionWrapper } from "../SectionWrapper";
import { BrandCard } from "./BrandCard";
import { BrandsProps } from "./types";


export const Brands: React.FC<BrandsProps> = (props) => {
  const {
    dbValue,
  } = props;
  const brandsImages = useImages(dbValue, dbValue.brands);
  
  return (
    <section style={{
      marginTop: 74,
      marginBottom: 74
    }}>
      <SectionWrapper
        title={'Worked With'}
        withTitle={true}
      >
        <CustomSlider
          settings={PROJECTS_SECTION_SLIDER_SETTINGS}
          styles={{
            width: '100%',
          }}
        >
          {brandsImages.map((item, index) => <BrandCard image={item.iamge} key={`${item.id}-${index}`} />)}
        </CustomSlider>
      </SectionWrapper>

    </section>
  )
}