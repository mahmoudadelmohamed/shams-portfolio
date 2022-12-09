import React from "react";
import { ImageWithFallBack } from "../ImageWithFallBack";
import { SectionWrapper } from "../SectionWrapper";
import { Hobbies } from "./Hobbies";
import './styles.sass';
import { SynonymsDetails } from "./SynonymsDetails";
import { SynonymsProps } from "./types";

export const Synonyms: React.FC<SynonymsProps> = (props) => {
  const {
    dbValue: {
      hobbies,
      staticText: {
        en: {
          HOBBIES,
          JOB_TITLE,
          NAME,
          SYNONYMS,
          SYNONYMS_DESCRIPTION,
        }
      }
    },
  } = props;


  return (
    <SectionWrapper
      withTitle={false}
      styles={{
        display: 'flex',
        marginTop: 40,
        marginBottom: 80,
      }}
    >
      <ImageWithFallBack
        url={'https://firebasestorage.googleapis.com/v0/b/testing-95f9a.appspot.com/o/shams_1.jpg?alt=media&token=f452ed09-bc52-429d-a467-242df8146c4d'}
        style={{
          height: 700,
          borderRadius: 8,
          boxShadow: '26px 26px 52px #c4c4c4,-26px -26px 52px #ffffff'
        }}
      />
      <div className="synonymsContainer">
        <SynonymsDetails
          title={NAME}
          subTitle={JOB_TITLE}
        />

        <SynonymsDetails
          title={SYNONYMS}
          subTitle={SYNONYMS_DESCRIPTION}
          className="equalSpace"

        />
        <Hobbies
          hobbies={hobbies}
          title={HOBBIES}
        />
      </div>
    </SectionWrapper>
  )
}