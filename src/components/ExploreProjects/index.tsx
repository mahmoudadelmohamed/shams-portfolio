import React from "react";
import { PROJECTS_SECTION_SLIDER_SETTINGS } from "../../constant";
import { useDB } from "../../hooks/useDB";
import { useImages } from "../../hooks/useImages";
import { CardImageSlider } from "../CardImageSlider";
import { CustomSlider } from "../CustomSlider";
import { SectionWrapper } from "../SectionWrapper";

export const ExploreProjects: React.FC = () => {
  const db = useDB();
  const images = useImages(db.localProjects);
  
  let localGalleryImages = db.localProjects ? images : [];
  return (
    <SectionWrapper
      title={'Title'}
      styles={{
        margin: '0 24px 0 24px'

      }}
    >

      <CustomSlider
        settings={PROJECTS_SECTION_SLIDER_SETTINGS}
        styles={{
          width: '100%',
         
        }}
      >
        {localGalleryImages?.map((item, index) => (
          <CardImageSlider
            item={{ ...item }}
            key={index}
          />

        ))}
      </CustomSlider>
    </SectionWrapper>
  )
}