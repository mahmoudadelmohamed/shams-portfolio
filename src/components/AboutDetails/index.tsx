import React, { useMemo, } from "react";
import { useDB } from "../../hooks/useDB";
import { Testimonials } from "../Testimonials";
import { Spinner } from "../Spinner";
import './styles.scss';
import { Brands } from "../Brands";
export const AboutDetails: React.FC = () => {

  const db = useDB();

  const hobbies = useMemo(() => db.hobbies ? db.hobbies : [], [db.hobbies]);


  if (hobbies.length === 0 && hobbies.length === 0) {
    return (
      <Spinner
        size={50}
        color='#000'
      />
    )
  }

  return (
    <>
      <Testimonials />
      <Brands />
    </>

  )
}