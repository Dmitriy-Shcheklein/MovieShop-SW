import React from 'react';
import CartTable from '../CartTable';
import Modal from '../Modal';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    '& button': {
      marginTop: '2%',
      width: "20%",
      minHeight: '30px',
      backgroundColor: '#0085ff',
      border: 'none',
      color: '#ffffff',
      cursor: 'pointer',
      borderRadius: '3px',
      '&:hover': {
        backgroundColor: '#0077e5',
      },
      '&:active': {
        backgroundColor: '#005db2',
      },
    }
  },
})


const CartPageWithOrder = (props) => {

  const classes = useStyles();
  const { modal, toggleModal } = props;

  if (modal) {
    return (
      <Modal
        modal={modal}
        toggleModal={toggleModal} />
    )
  }

  return (
    <section>
      <CartTable />
      <div className={classes.root}>
        <button
          onClick={toggleModal}
          className='btn btn-primary'>BUY NOW!!!</button>
      </div>
    </section>
  )
}

export default CartPageWithOrder;