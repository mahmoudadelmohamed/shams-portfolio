import React, { useMemo, } from "react";
import { useDB } from "../../hooks/useDB";
import { Testimonials } from "../Testimonials";
import { SectionWrapper } from "../SectionWrapper";
import { Spinner } from "../Spinner";
import './styles.scss';
export const AboutDetails: React.FC = () => {

  const db = useDB();

  const hobbies = useMemo(() => db.hobbies ? db.hobbies : [], [db.hobbies]);

  const brands = useMemo(() => db.brands ? db.brands : [], [db.brands]);

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
    </>

  )
}