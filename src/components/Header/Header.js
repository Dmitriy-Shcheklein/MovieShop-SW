import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header' >
      <Link to='/' className='display-4 main'>SW Fan-Shop</Link>
      <Link to='/movies' className='display-5'>By a movie</Link>
      <Link to='/figurine' className='display-5'>Buy a figurine of your favorite charactere</Link>
      <Link to='/cart' className='fas fa-shopping-cart cart'>Your Cart</Link>
    </header>
  )
}

export default Header;
