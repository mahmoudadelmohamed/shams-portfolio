import React from 'react';
import { Title } from '../Title';
import { SectionWrapperProps } from './types';
import './styles.scss'


export const SectionWrapper: React.FC<SectionWrapperProps> = (props) => {
  const {
    children,
    title,
    styles,
    withTitle,
  } = props;
  return (
    <section style={styles}
      className='wrapper'
    >
      {withTitle && (
        <Title
          title={title}
        />
      )}

      {children}
    </section>
  )
}
