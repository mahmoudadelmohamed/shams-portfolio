import React from "react";
import './styles.scss'

export const Title:React.FC<TitpeProps> = (props) => {
  const {
    title,
  } = props
  return (
    <h1 className="title">{title}</h1>
  )
}