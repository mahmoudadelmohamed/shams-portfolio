import React from "react";
import './styles.sass';
import { Link } from "gatsby";
import { ProjectsProps } from "./types";

export const Projects: React.FC<ProjectsProps> = (props) => {
  const {
    projects,
  } = props;
  return (
    <section className="imageProjectsSection">
      {projects?.map((item, index) => {
        return (
          <Link
            key={`${item.id}-${index}`}
            to="/projectDetails"
          >
            <div className="image">
              <img
                src={item.thumbnail}
                className="imageProjectStyle"
              />

              <div className="imageOverlay">
                <div className="imageTitle">
                  <h2 style={{ color: '#FFF', fontSize: 98, }}>{item.title}</h2>
                  <h2 style={{ color: '#FFF', fontSize: 50, }}> {item.date}</h2>
                </div>
              </div>
            </div>
          </Link>

        )
      })}
    </section>
  )
}