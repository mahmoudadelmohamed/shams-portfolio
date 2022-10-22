import React from 'react';
import { Title } from '../Title';
import { SectionWrapperProps } from './types';
import './styles.scss'


export const SectionWrapper: React.FC<SectionWrapperProps> = (props) => {
  const {
    children,
    title,
    styles,
  } = props;
  return (
    <section style={styles}
      className='wrapper'
    >
      <Title
        title={title}
      />

      {children}
    </section>
  )
}
