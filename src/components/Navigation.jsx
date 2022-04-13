import React from 'react';
import { NavLink } from 'react-router-dom';
import MenuItems from '../MenuItems';

const Navigation = () => {
  return (
    <nav>
        {
        MenuItems.map((i) => {
          return(
            <NavLink key={i.id} className={i.claass} to={i.link}>{i.item}</NavLink>
          )
        })
        }
    </nav>
  )
};

export default Navigation;