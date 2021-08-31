import React from 'react';
import { connect } from 'react-redux';
import CartTableAnyWidth from './CartTableAnyWidth';

const CartTable = (props) => {

  // let wrapperStyle = '';

  // if (!total) {
  //   return null
  // }

  // if (window.location.href === 'http://localhost:3000/cart') {
  //   wrapperStyle = 'cartPageWrapper';
  // } else {
  //   wrapperStyle = 'anotherPageWrapper';
  // }


  const { items, total } = props;

  return <CartTableAnyWidth
    items={items}
    total={total}
  />

}



const mapToStateProps = ({ cartList, allOrder }) => {
  return {
    items: cartList,
    total: allOrder,
  }
};

export default connect(mapToStateProps)(CartTable);

