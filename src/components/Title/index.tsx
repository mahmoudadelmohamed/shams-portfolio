import React from "react";

export const Title:React.FC<TitpeProps> = (props) => {
  const {
    title,
  } = props
  return (
    <h1>{title}</h1>
  )
}