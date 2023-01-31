import React, { useContext, useState } from 'react'
import { MenuContext } from '../../../context/MenuContext';
import './styles.sass';

interface MenuButtonProps {
  open?: boolean;
}
export const MenuButton: React.FC<MenuButtonProps> = (props) => {
  const { open, setOpen } = useContext(MenuContext);
  const toggle = () => setOpen(!open);
  console.log(open, 'FIND_ME', 'MSG');
  
  return (
    <div className='menu-button-wrap'>
      <button
        onClick={toggle}
        className='menu-button'>
        <span />
      </button>
    </div>
  )
}
