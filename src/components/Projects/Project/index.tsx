import { Link } from "gatsby";
import React from "react";
import { ProjectProps } from "./types";
import './styles.sass';

export const Project: React.FC<ProjectProps> = (props) => {
  const {
    project: {
      date,
      id,
      thumbnail,
      title
    }
  } = props;
  return (
    <Link
      key={id}
      to={`/projectDetails/${id}`}
    >
      <div className="image">
        <img
          src={thumbnail}
          className="imageProjectStyle"
        />
        <div className="imageOverlay">
          <div className="imageTitle">
            <h2 className="title" >{title}</h2>
            <h2 className="date"> {date}</h2>
          </div>
        </div>
      </div>
    </Link>
  )
}