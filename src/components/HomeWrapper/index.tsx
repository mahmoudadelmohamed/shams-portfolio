import { Link } from "gatsby";
import React from "react";
import { ParallaxBanner } from 'react-scroll-parallax';
import { HeroSection } from "../HeroSection";
import { HomeWrapperProps } from "./types";
import './styles.sass'
export const HomeWrapper: React.FC<HomeWrapperProps> = (props) => {
  const { homeCards = [], links } = props;

  return (
    <>
      <HeroSection 
        links={links}
      />
      {homeCards.map((homeCard) => {
        return (
          <ParallaxBanner
            key={homeCard.imageId}
            layers={[
              {
                image: homeCard.image,
                speed: -50,
                style: {
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
                        <h1 className="category-title">{`- ${homeCard.title} -`} </h1>

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