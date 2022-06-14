import './Nav.css';
import React from 'react';

function Nav() {
  return (
    <div className='containerrr'>
      <label className='logo'>Logo</label>
      <ul>
        <li>
         <a href='#'>Home</a>
        </li>
        <li>
         <a href='#' >Services</a>
        </li>
        <li>
         <a href='#'>About </a>
        </li>
        <li>
         <a href='#'>Contact </a>
        </li>
      </ul>
    </div>
  )
}


export default Nav