import React from "react";
import { ContentDetailsProps } from "./types";
import './styles.sass';
export const ContentDetails: React.FC<ContentDetailsProps> = (props) => {
  const {
    role,
    title,
  } = props;

  return (
    <section className="hobbiesWrapper">
      <h1 className="hobbiesTitle">{title}</h1>
      <div className="hobbiesContainer">
        {role.map((item) => (
          <div key={item.id}>
            <h2 className="hobby">{item.title}</h2>
          </div>
        ))}

      </div>
    </section>
  )
}
