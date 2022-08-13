import { CSSProperties, PropsWithChildren } from "react";
import { Settings } from "react-slick";

export interface CustomSliderProps extends PropsWithChildren {
  styles: CSSProperties;
  settings: Settings;
}