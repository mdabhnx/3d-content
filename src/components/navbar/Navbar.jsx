import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='header'>
      <NavLink
        to={'/'}
        className={
          'w-20 h-10 rounded-lg bg-white flex items-center justify-center font-bold shadow-md'
        }
      >
        <p className='blue-gradient_text'>Hossain</p>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink
          to={'/about'}
          className={({ isActive }) =>
            isActive ? 'text-blue-500' : 'text-black'
          }
        >
          About
        </NavLink>
        <NavLink
          to={'/projects'}
          className={({ isActive }) =>
            isActive ? 'text-blue-500' : 'text-black'
          }
        >
          Projects
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
