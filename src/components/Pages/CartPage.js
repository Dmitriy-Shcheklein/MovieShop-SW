import React from 'react';
import CartTable from '../CartTable';
import { useSelector } from 'react-redux';

import './CartPage.scss';

const CartPage = () => {

  const total = useSelector(state => state.allOrder);

  if (!total) {
    return (
      <div className='cartPage'>
        <h2>You have not selected anything!!!</h2>
        <p>Take your pick.<br /> We have a lot of interesting products.</p>
      </div>
    )
  }

  console.log(typeof (window.location.href))

  return (
    <div className='cartPage_true'>
      <CartTable />
      <div className='button_buy'>
        <button className='btn btn-primary'>BUY NOW!!!</button>
      </div>
    </div>
  )
}

export default CartPage;
