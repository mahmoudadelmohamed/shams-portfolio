import React from 'react';
import { Title } from '../Title';
import { SectionWrapperProps } from './types';


export const SectionWrapper: React.FC<SectionWrapperProps> = (props) => {
  const {
    children,
    title,
    styles,
  } = props;
  return (
    <section style={styles}>
      <Title
        title={title}
      />
      
        {children}
    </section>
  )
}
