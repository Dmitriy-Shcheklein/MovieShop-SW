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

  return (
    <CartTable />
  )
}

export default CartPage;
