import React from "react";
import './styles.scss'

export const Title:React.FC<TitpeProps> = (props) => {
  const {
    title,
  } = props
  return (
    <h2 className="title">{title}</h2>
  )
}