import React, { useMemo } from "react";
import images from "../../assets";
import { useDB } from "../../hooks/useDB";
import { ImageWithFallBack } from "../ImageWithFallBack";
import './styles.scss';

export const AboutDetails: React.FC = () => {
  const db = useDB();
  console.log(db.hobbies, 'FIND_ME', 'HOBBIES');
  
  return (
    <section className='aboutSectionContainer'>
      <div>
        <ImageWithFallBack
          url='https://firebasestorage.googleapis.com/v0/b/testing-95f9a.appspot.com/o/shams_1.jpg?alt=media&token=f452ed09-bc52-429d-a467-242df8146c4d'
          fallBackUrl={images.placeholder}
          className="profileImage"
        />
      </div>
      <div style={{
        width: '60%'
      }}>
        <div>
          <h1 style={{
            fontSize: 48,
            lineHeight: 0
          }}>I'M SHAMS NABIL</h1>
          <p style={{
            fontSize: 18
          }}>Photographer and Social Media Specialest</p>
        </div>
        <div>
          <h1>
            THE SYNONYMS
          </h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore natus
            aspernatur soluta? Provident omnis accusamus impedit enim adipisci deserunt, eum
            eligendi quos rem porro ex sequi nam hic error! Facilis!</p>
        </div>
        <div>
          <h1>PHOTOSHOTS FOR</h1>
          <div style={{
            display: 'flex',

          }}>
            <p>Dodz</p>
            <p>Costa</p>
            <p>El Dahan</p>
            <p>Hadramot</p>
            <p>Ahmed nada</p>
            <p>Printova</p>
            <p>Toucan</p>
            <p>Cerep company</p>
            <p>West El balad</p>
            <p>Harka</p>
            <p>Qahwet Oaf</p>
            <p>Spy fall</p>
            <p>Blabn</p>
            <p>Macdoos</p>
          </div>
        </div>
        <div>
          <h1>HOBBIES</h1>
          <div className="flexGridWrapper">
            <p>Chess</p>
            <p>Chess</p>
            <p>Chess</p>
            <p>Chess</p>
          </div>
        </div>
      </div>
    </section>

  )
}