import React from "react";
import { PROJECTS_SECTION_SLIDER_SETTINGS } from "../../constant";
import { useDB } from "../../hooks/useDB";
import { CardImageSlider } from "../CardImageSlider";
import { CustomSlider } from "../CustomSlider";
import { SectionWrapper } from "../SectionWrapper";

export const ExploreProjects: React.FC = () => {
  const db = useDB();
  let localGalleryImages = db.localGallery?.map((item) => {
    return db.images[item.id];
  });

  return (
    <SectionWrapper
      title={'Title'}
      styles={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center ',
      }}
    >

      <CustomSlider
        settings={PROJECTS_SECTION_SLIDER_SETTINGS}
        styles={{
          width: '95%',
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