import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CartPageEmpty from './CartPageEmpty';
import CartPageWithOrder from './CartPageWithOrder';



const CartPage = () => {

  const total = useSelector(state => state.allOrder);

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (!total && !modal) {
    return <CartPageEmpty />
  };

  return <CartPageWithOrder
    modal={modal}
    toggleModal={toggleModal}
  />
}

export default CartPage;

