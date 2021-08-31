import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    color: '#ffffff',
    height: '70vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '& h2': {
      fontSize: '2rem',
      textTransform: 'uppercase',
    },
    '& p': {
      fontSize: '1.5rem',
    }
  }
})

const CartPageEmpty = () => {

  const classes = useStyles();

  return (
    <section className={classes.root}>
      <h2>You have not selected anything!!!</h2>
      <p>Take your pick.<br /> We have a lot of interesting products.</p>
    </section>
  )
}

export default CartPageEmpty
