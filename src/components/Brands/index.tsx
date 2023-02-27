import React from "react";
import { PROJECTS_SECTION_SLIDER_SETTINGS } from "../../constant";
import { useImages } from "../../hooks/useImages";
import { CustomSlider } from "../CustomSlider";
import { SectionWrapper } from "../SectionWrapper";
import { BrandCard } from "./BrandCard";
import { BrandsProps } from "./types";


export const Brands: React.FC<BrandsProps> = (props) => {
  const {
    brands,
    images,
  } = props;
  const imagesUrls = useImages(images, brands);
 
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
            overflow: 'hidden',
          }}
        >
          {imagesUrls.map((item, index) => <BrandCard image={item?.image} key={`${item}-${index}`} />)}
        </CustomSlider>
      </SectionWrapper>

    </section>
  )
}