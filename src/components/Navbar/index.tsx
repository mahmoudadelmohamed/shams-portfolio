import classNames from 'classnames';
import React, { useState } from 'react'
import images from '../../assets';
import { useIsMobile } from '../../hooks/useMobile';
import { NavbarLinks } from './Links';
import './styles.sass';
import { NavbarProps } from './types';

export const Navbar: React.FC<NavbarProps> = (props) => {
  const [toggle, setToggle] = useState(false);
  const isMobile = useIsMobile();

  const {
    links,
  } = props;

  const handleMenuToggle = () => setToggle(!toggle);

  return (
    <>

      <div className='navbar-wrapper'>
        <nav className='navbar-container'>

          <div className='navbar-content'>
            <h2 className='logo-font'>
              Shams Nabil
            </h2>
          </div>

          <ul className={classNames({
            'navbar-links': !isMobile,
            'hidde-navbar-links': isMobile,
          })}>
            <NavbarLinks links={links} />
          </ul>
          <div
            onClick={handleMenuToggle}
            className={
              classNames({
                'hide-burger-icon': !isMobile,
              })
            }>
            <img
              src={toggle ? images.close : images.menu}
              className='burger-icon-style'
            />
          </div>
        </nav>
      </div>
      <div 
      className='mobile-links-list'
      style={{
        transform: toggle ? 'translateX(0)' : 'translateX(100%)'
      }}>
        <ul style={{
          margin: 16,
        }}>
          <NavbarLinks links={links} />
        </ul>

      </div>
    </>
  )
}
