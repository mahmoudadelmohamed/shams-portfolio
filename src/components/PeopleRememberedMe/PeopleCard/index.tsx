import React from "react";
import { PeopleRecommendMe } from "../../../context/types";
import './styles.scss';

interface PeopleCardProps {
  item: PeopleRecommendMe;
}
export const PeopleCard: React.FC<PeopleCardProps> = (props) => {
  const {
    item
  } = props;

  return (
    <section className="container">
      <div style={{
        height: 300,
        backgroundColor: 'greena'
      }}>
        <p>{item.description}</p>
      </div>
      <div style={{
        backgroundColor: 'rgba(235, 235, 214, 1)',
        display: 'flex',
        borderRadius: 15,
        alignItems: 'center'
      }}>
        <div style={{
          backgroundColor: 'red',
          marginTop: 16,
          marginBottom: 16,
        }}>
          <img
            src={item.imageUrl}
            style={{
              width: 70,
              height: 70,
              borderRadius: 35,
              objectFit: 'contain',
              backgroundColor: 'gray'
            }}

          />
        </div>
      </div>

    </section>
  )
}