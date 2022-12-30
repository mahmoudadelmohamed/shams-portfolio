import React from "react";
import { Columns, Grid } from "react-feather";
import { HeaderProps } from "./types";
import './styles.sass';
export const Header: React.FC<HeaderProps> = (props) => {
  const {
    toggleView,
    view,
  } = props;
  return (
    <header className="header-container">
      <button onClick={() => toggleView(!view)}>
        {!view ? <Columns /> : <Grid />}
      </button>
    </header>
  )
}