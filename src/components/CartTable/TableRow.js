import React from 'react';
import { connect } from 'react-redux';
import {
  productDeleteAllToCart, productDecreaseFromCart,
  productAddToCart,
} from '../../actions/Actions';
import { Fragment } from 'react';
import { makeStyles } from '@material-ui/styles';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';

const useStyles = makeStyles({
  root: {
    textAlign: 'right',
    '& button': {
      minWidth: '15%',
      minHeight: '20px',
      margin: '5px',
      backgroundColor: '#ffffff',
      cursor: 'pointer',
      borderRadius: '3px',
    }
  },
  btnAdd: {
    border: '2px solid #00a300',
    '& i': {
      color: '#00a300',
    },
    '&:hover': {
      boxShadow: 'inset 0 0 10px rgba(0,163,0,.5)'
    },
    '&:active': {
      boxShadow: 'inset 0 0 10px rgba(0,163,0,.9)'
    },
  },
  btnDecrease: {
    border: '2px solid #fbc740',
    '& i': {
      color: '#fbc740',
    },
    '&:hover': {
      boxShadow: 'inset 0 0 10px rgba(251, 199, 64,.5)'
    },
    '&:active': {
      boxShadow: 'inset 0 0 10px rgba(251, 199, 64,.9)'
    },
  },
  btnDeleteAll: {
    border: '2px solid #dc143c',
    '& i': {
      color: '#dc143c',
    },
    '&:hover': {
      boxShadow: 'inset 0 0 10px rgba(220,20,60,.5)'
    },
    '&:active': {
      boxShadow: 'inset 0 0 10px rgba(220,20,60,.9)'
    },
  },
})

const TableRow = ({ item, idx, onAdd, onDecrease, onDeleteAll }) => {

  const classes = useStyles();

  return (
    <Fragment >
      <td>{idx + 1}</td>
      <td>{item.title}</td>
      <td>{item.count}</td>
      <td>${item.total}</td>
      <td className={classes.root}>
        <button
          className={classes.btnAdd}
          onClick={() => onAdd(item.id)}
        >
          <i><AddCircleIcon /></i>
        </button>
        <button
          className={classes.btnDecrease}
          onClick={() => onDecrease(item.id)}
        >
          <i><IndeterminateCheckBoxIcon /></i>
        </button>
        <button
          className={classes.btnDeleteAll}
          onClick={() => onDeleteAll(item.id)}
        >
          <i><DeleteForeverIcon /></i>
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
    onAdd: (id) => dispatch(productAddToCart(id)),
    onDecrease: (id) => dispatch(productDecreaseFromCart(id)),
    onDeleteAll: (id) => dispatch(productDeleteAllToCart(id)),
  }
};

export default connect(mapToStateProps, mapDispatchToProps)(TableRow);