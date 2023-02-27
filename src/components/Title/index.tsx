import React from "react";
import './styles.sass'

export const Title:React.FC<TitpeProps> = (props) => {
  const {
    title,
  } = props
  return (
    <h2 className="sectionWrapperTitle">{title}</h2>
  )
}