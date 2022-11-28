import React, { useMemo } from "react";
import images from "../../../assets";
import './styles.scss';
import { PeopleCardProps } from "./types";

export const PeopleCard: React.FC<PeopleCardProps> = (props) => {
  const {
    item: {
      description,
      imageUrl,
      job,
      name,
    }
  } = props;
  const recommendedPeoplePic = useMemo(() => imageUrl ? imageUrl : images.placeholder, [imageUrl]);

  return (
    <section className="container">
      <div className="peopleWrapper">
        <img
          src={recommendedPeoplePic}
          className="peopleImage"
        />
      </div>

      <div className="detailsContainer">
        <h2 className="name">{name}</h2>
        <h2
          style={{
            color: '#9A9A9A'
          }}
          className="job">{job}</h2>
        <p className="description">{description}</p>
      </div>

    </section>
  )
}
