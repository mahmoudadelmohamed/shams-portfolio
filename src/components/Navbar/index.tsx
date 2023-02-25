import { Link } from 'gatsby';
import React from 'react'
import { LinkType } from '../../context/types';
import './styles.sass';
import { NavbarProps } from './types';

export const Navbar: React.FC<NavbarProps> = (props) => {
  const {
    links,
  } = props;

  return (
    <div className='navbar-wrapper'>
      <nav className='navbar-container'>

        <div className='navbar-content'>
          <h2 className='logo-font'>
            Shams Nabil
          </h2>
        </div>

        <ul className='navbar-links'>
          {
            links.map((item) => {
              if (LinkType.EXTERNAL === item.linkType) {
                return (
                  <a key={item.id} className='links' href={item.link} target="_blank"> <li>{item.title}</li> </a>
                )
              }
              if (LinkType.INTERNAL === item.linkType) {
                return (
                  <Link to={item.link} className='links'> <li>{item.title}</li></Link>
                )
              }
            })
          }
        </ul>
      </nav>
    </div>
  )
}
