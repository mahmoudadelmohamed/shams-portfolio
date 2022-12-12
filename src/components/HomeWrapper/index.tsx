import { Link } from "gatsby";
import React from "react";
import { ParallaxBanner } from 'react-scroll-parallax';
import { DBContextProps } from "../../context/DBContext";
import { useImages } from "../../hooks/useImages";
import { Spinner } from "../Spinner";
export interface PageProps {
  dbValue: DBContextProps;
}
export const HomeWrapper: React.FC<PageProps> = (props) => {
  const { dbValue } = props;

  const categoryImages = useImages(dbValue, dbValue.categories);

  if (dbValue.categories.length === 0) {
    return (
      <Spinner />
    )
  }

  return (
    <>
      {/* <Link
        to="/about"
      >
        <h3>About</h3>
      </Link>
      <Link
        to="/categories/fashion"
      >
        <h3>category</h3>
      </Link> */}
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
                  <div
                    onClick={() => console.log('CLICK', 'FIND_ME', dbValue.categories[index].title)}
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
                        to={`/categories/${dbValue.categories[index].title}`}
                      >
                        <h1 style={{
                          color: '#FFF',
                          letterSpacing: 2,
                          fontSize: 64,
                          textTransform: 'uppercase'
                        }}>{`- ${dbValue.categories[index].title} -`} </h1>

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