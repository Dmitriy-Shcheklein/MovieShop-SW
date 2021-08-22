import React from 'react';
import { connect } from 'react-redux';
import { movieAddToCart, movieDecreaseFromCart, movieDeleteAllToCart } from '../../actions/Actions';
import { Fragment } from 'react';

const TableRow = ({ item, idx, onAdd, onDecrease, onDeleteAll }) => {

  return (
    <Fragment>
      <td>{idx + 1}</td>
      <td>{item.title}</td>
      <td>{item.count}</td>
      <td>${item.total}</td>
      <td align='right'>
        <button
          onClick={() => onAdd(item.id)}
          className='btn btn-outline-success'>
          <i className='fas fa-plus'></i>
        </button>
        <button
          onClick={() => onDecrease(item.id)}
          className='btn btn-outline-warning'>
          <i className='fas fa-minus'></i>
        </button>
        <button
          onClick={() => onDeleteAll(item.id)}
          className='btn btn-outline-danger'>
          <i className='fa fa-trash'></i>
        </button>
      </td>
    </Fragment>

  )
}

const mapToStateProps = ({ cartList, allOrder }) => {
  return {
    items: cartList,
    total: allOrder,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (id) => dispatch(movieAddToCart(id)),
    onDecrease: (id) => dispatch(movieDecreaseFromCart(id)),
    onDeleteAll: (id) => dispatch(movieDeleteAllToCart(id)),
  }
};


export default connect(mapToStateProps, mapDispatchToProps)(TableRow);