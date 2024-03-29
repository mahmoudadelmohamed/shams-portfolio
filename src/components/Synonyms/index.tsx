import React from "react";
import { ImageWithFallBack } from "../ImageWithFallBack";
import { SectionWrapper } from "../SectionWrapper";
import { ContentDetails } from "./ContentDetails";
import './styles.sass';
import { SynonymsDetails } from "./SynonymsDetails";
import { SynonymsProps } from "./types";

export const Synonyms: React.FC<SynonymsProps> = (props) => {
  const {
    expectedFromMe,
    hobbies,
    staticText: {
      en: {
        HOBBIES,
        JOB_TITLE,
        NAME,
        SYNONYMS,
        SYNONYMS_DESCRIPTION,
        EXPECTED_FROM_ME,
      }
    },
  } = props;

  return (
    <section className="section-wrapper">
      <ImageWithFallBack
        url={'https://firebasestorage.googleapis.com/v0/b/testing-95f9a.appspot.com/o/shams_1.jpg?alt=media&token=f452ed09-bc52-429d-a467-242df8146c4d'}
        className="profile-image"
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
        <div className="expected-from-me-wrapper">
          <ContentDetails
            role={expectedFromMe}
            title={EXPECTED_FROM_ME}
          />
        </div>
        <div className="content-details-wrapper">
          <ContentDetails
            role={hobbies}
            title={HOBBIES}
          />
        </div>
      </div>
    </section>
  )
}