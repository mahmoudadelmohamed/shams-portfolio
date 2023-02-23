import { Link } from 'gatsby';
import React, { useCallback, useEffect, useState } from 'react'
import images from '../../assets'
import classnames from 'classnames';
import './styles.sass'
export const Navbar: React.FC = () => {
  const [startScroll, setStartScroll] = useState(0);

  const handleScroll = useCallback((e: any) => {
    const window = e.currentTarget;
    setStartScroll(window.scrollY);
  }, [startScroll]);

  useEffect(() => {
    window.addEventListener("scroll", (e) => handleScroll(e));
    return () => {
      window.removeEventListener("scroll", (e) => handleScroll(e))
    }
  }, [handleScroll]);

  return (
    <div className='navbar-wrapper'>
      <nav className={classnames({
        'navbar-start-scroll-bg navbar-container': startScroll,
        'navbar-container': !startScroll
      })}>

        <div className='navbar-content'>
          <img
            src={images.logo}
          />
        </div>
        <ul className='navbar-links'>
          <Link
            className='links'
            to="/">
            <li className='links-style'>Home</li>
          </Link>
          <Link
            className='links'
            to='/about'
          >
            <li>About</li>
          </Link>
          <Link
            className='links'
            to='/'
          >
            <li>Projects</li>
          </Link>
          <li>instagram</li>
          <li>linkedin</li>
        </ul>
      </nav>
    </div>
  )
}
