import React from "react";
import { NavbarLinksProps } from "./types";
import { Link } from 'gatsby';
import { LinkType } from '../../../context/types';
import './styles.sass';

export const NavbarLinks: React.FC<NavbarLinksProps> = (props) => {
  const {
    links,
  } = props;

  return (
    <>
      {
        links.map((item) => {
          if (LinkType.EXTERNAL === item.linkType) {
            return (
              <a key={item.id} className='links-mobile' href={item.link} target="_blank"> <li>{item.title}</li> </a>
            )
          }
          if (LinkType.INTERNAL === item.linkType) {
            return (
              <Link key={item.id} to={item.link} className='links-mobile'> <li>{item.title}</li></Link>
            )
          }
        })
      }
    </>
  )
}