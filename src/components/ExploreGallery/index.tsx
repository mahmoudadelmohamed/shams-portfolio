import React from "react";
import { useDB } from "../../hooks/useDB";
import { useImages } from "../../hooks/useImages";
import { SectionWrapper } from "../SectionWrapper";
import './styles.scss'

export const ExploreGallery: React.FC = () => {
  const db = useDB();
  const images = useImages(db.localGallery);
  let exploreGalleryItems = db.localGallery ? images : [];


  return (
    <SectionWrapper
      title={'Explore Gallery.'}
      styles={{
        margin: '0 75px 0 75px',
      }}
    >
      <main>
        <section className="flex-grid">
          {exploreGalleryItems.map((item) => (
            <div
              key={item.id}
              className="col">
              <img
                src={item?.image}
                style={{
                  width: '100%',
                  borderRadius: 8,
                  objectFit: 'contain',
                }}
              />
            </div>
          ))}

        </section>
      </main>
    </SectionWrapper>
  )
}