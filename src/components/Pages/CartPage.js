import React, { useState } from 'react';
import CartTable from '../CartTable';
import { useSelector } from 'react-redux';
import Modal from '../Modal';

import './CartPage.scss';

const CartPage = () => {

  const total = useSelector(state => state.allOrder);

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (!total) {
    return (
      <div className='cartPage'>
        <h2>You have not selected anything!!!</h2>
        <p>Take your pick.<br /> We have a lot of interesting products.</p>
      </div>
    )
  }

  return (
    <div className='cartPage_true'>
      <CartTable />
      <div className='button_buy'>
        <button
          onClick={() => toggleModal()}
          className='btn btn-primary'>BUY NOW!!!</button>
      </div>
      <Modal
        modal={modal}
        toggleModal={toggleModal} />
    </div>
  )
}

export default CartPage;
