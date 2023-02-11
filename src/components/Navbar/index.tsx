import { Link } from 'gatsby';
import React, { SyntheticEvent, useCallback, useEffect, useState } from 'react'
import images from '../../assets'

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
    <div style={{
      position: 'relative',
    }}>
      <nav style={{
        display: 'flex',
        margin: '8px 24px 8px 24px',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'fixed',
        top: 0,
        right: 0,
        left: 0,
        zIndex: 10,
        backgroundColor: startScroll > 0 ? 'red' : ''
      }}>

        <div style={{
          flex: 1
        }}>
          <img
            src={images.logo}
          />
        </div>
        <ul style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '50%',
          textTransform: 'uppercase'
        }}>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link
            to='/about'
          >
            <li>About</li>
          </Link>
          <li>Facebook</li>
          <li>instagram</li>
          <li>linkedin</li>
        </ul>
      </nav>
    </div>
  )
}
