import React, { useState } from "react";
import './styles.sass';
import {
  Facebook,
  Instagram,
  Linkedin,
  
} from 'react-feather';
import cn from 'classnames';

export const MenuContent: React.FC = () => {
  
  return (
    <div className="menu-holder">
      <div className={"menu-inside"}>
        <div className="menu-nav-container">
          <ul className="internal-nav-links">
              <li></li>
          </ul>
        </div>
      </div>
    </div>
  )
}