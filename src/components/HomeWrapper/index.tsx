import React, { useMemo } from "react";
import { ParallaxBanner } from 'react-scroll-parallax';
import { useDB } from "../../hooks/useDB";
import { useImages } from "../../hooks/useImages";
import { GalleryTunnel } from "../GalleryTunnel";
import { Spinner } from "../Spinner";

export const HomeWrapper: React.FC = () => {
  const db = useDB();

  const categories = useMemo(() => db.categories ? db.categories : [], [db.categories]);

  const categoryImages = useImages(db.categories);

  if (categories.length === 0) {
    return (
      <Spinner /> 
    )
  }

  return (
    <>
      {/* <GalleryTunnel /> */}
      {categoryImages.map((item, index) => {
        return (
          <ParallaxBanner
            key={item.id}
            layers={[
              {
                image: item.image,
                speed: -50,
                style: {
                  objectFit: 'cover',
                  width: '100%',
                }
              },
              {
                children: (
                  <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    height: '65%',
                    flexDirection: 'column'
                  }}>
                    <p style={{
                      color: '#d3cccc',
                      
                    }}>#Featured Campaign</p>
                    <h1 style={{
                      color: '#FFF',
                      letterSpacing: 2,
                      lineHeight: 0
                    }}>{categories[index].title} </h1>
                  </div>
                )
              }
            ]}
            style={{
              height: '100vh'
            }}
          />
        )
      })}

      {/* <ExploreProjects />
      <ExploreGallery />
      <PeopleRememberedMe /> */}
    </>
  )
}