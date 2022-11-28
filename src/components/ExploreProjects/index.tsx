import React from "react";
import { PROJECTS_SECTION_SLIDER_SETTINGS } from "../../constant";
import { useDB } from "../../hooks/useDB";
import { useImages } from "../../hooks/useImages";
import { CardImageSlider } from "../CardImageSlider";
import { CustomSlider } from "../CustomSlider";
import { SectionWrapper } from "../SectionWrapper";
import { Spinner } from "../Spinner";

export const ExploreProjects: React.FC = () => {
  
  const db = useDB();
  const images = useImages(db.localProjects);
  let localGalleryImages = db.localProjects ? images : [];
  
  if (localGalleryImages.length === 0) {
    return <Spinner />
  }
  return (
    <SectionWrapper
      title={'Explore Categories.'}
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