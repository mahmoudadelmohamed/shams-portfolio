import React from "react";
import { HobbiesProps } from "./types";
import './styles.sass';
export const ContentDetails: React.FC<HobbiesProps> = (props) => {
  const {
    hobbies,
    title,
  } = props;

  return (
    <section className="hobbiesWrapper">
      <h1 className="hobbiesTitle">{title}</h1>
      <div className="hobbiesContainer">
        {hobbies.map((item) => (
          <div key={item.id}>
            <h1>{item.hobby}</h1>
          </div>
        ))}

      </div>
    </section>
  )
}
