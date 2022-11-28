import React from "react";
import {
  DotLoader
} from 'react-spinners'
import { LoaderSizeMarginProps } from "react-spinners/helpers/props";
import './styles.scss';

export const Spinner: React.FC<LoaderSizeMarginProps> = (props) => {

  return (
    <div className="spinnerContainer">
      <DotLoader
        {...props}
      />
    </div>
  )
}