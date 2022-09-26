import React from "react";
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

  return (
    <section className="container">
      <div style={{
        paddingLeft: 16,
        paddingTop: 8
}}>
        <div>
          <img
            src={imageUrl ? imageUrl : images.placeholder}
            style={{
              width: 180,
              height: 180,
              borderRadius: 16,
              objectFit: "cover"
            }}
          />
        </div>
        <div>
          <h2>
            {`“ ${job} ”`}
          </h2>
        </div>
        <div>
          <h3>
            {description}
          </h3>
        </div>
        <div>
          <h4>
            {name}
          </h4>
        </div>
      </div>
    </section>
  )
}
