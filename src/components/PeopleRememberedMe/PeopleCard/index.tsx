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
        <div className="detailsWrapper">
          <h2>{job}</h2>
          <div className="descriptionContainer">
            <h3>
              {description}
            </h3>
          </div>
          <h4>{name}</h4>
        </div>
      </div>
    </section>
  )
}
