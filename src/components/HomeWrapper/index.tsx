import { Link } from "gatsby";
import React from "react";
import { ParallaxBanner } from 'react-scroll-parallax';
import { HomeWrapperProps } from "./types";

export const HomeWrapper: React.FC<HomeWrapperProps> = (props) => {
  const { homeCards = [] } = props;
  
  return (
    <>
      {homeCards.map((homeCard) => {
        return (
          <ParallaxBanner
            key={homeCard.imageId}
            layers={[
              {
                image: homeCard.image,
                speed: -50,
                style: {
                  objectFit: 'cover',
                  width: '100%',
                }
              },
              {
                children: (
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                      height: '65%',
                      flexDirection: 'column',
                    }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                      cursor: 'pointer'
                    }}>
                      <p style={{
                        color: '#d3cccc',
                        fontSize: 24

                      }}>#Featured Campaign</p>
                      <Link
                        style={{
                          textDecoration: 'none'
                        }}
                        to={`/categories/${homeCard.title}`}
                      >
                        <h1 style={{
                          color: '#FFF',
                          letterSpacing: 2,
                          fontSize: 64,
                          textTransform: 'uppercase'
                        }}>{`- ${homeCard.title} -`} </h1>

                      </Link>

                    </div>
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
    </>
  )
}