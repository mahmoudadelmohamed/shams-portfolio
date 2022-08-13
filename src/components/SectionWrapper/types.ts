import {
  CSSProperties,
  PropsWithChildren,
} from "react";

export interface SectionWrapperProps extends PropsWithChildren {
  title: string;
  styles: CSSProperties;
}