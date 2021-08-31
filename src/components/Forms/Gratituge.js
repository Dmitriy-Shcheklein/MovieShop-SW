import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    '& h3': {
      fontSize: '2rem',
    },
    '& p': {
      fontSize: '1.5rem',
    },
    '& button': {
      color: 'white',
      backgroundColor: '#000000',
      borderRadius: '4px',
      borderColor: '#000000',
      height: '30px',
      marginLeft: '5px',
      cursor: 'pointer',
      '&:disabled': {
        backgroundColor: '#f1f1f1',
        color: '#808080',
        border: '1px solid #808080',
      },
      '&:active': {
        boxShadow: '2px 2px 2px 2px rgba(0, 0, 0, 0.2)'
      }
    }
  }
})

const Gratituge = ({ numberOfOrder, toggleModal }) => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h3>Thank you for your order.</h3>
      <p> Your order number is #{numberOfOrder}.<br />
        We have emailed your order confirmation,<br />
        and will send you an update when your order has shipped.</p>
      <button
        onClick={toggleModal}
        className='btn btn-dark'>Close</button>
    </div>
  )
}

export default Gratituge;
