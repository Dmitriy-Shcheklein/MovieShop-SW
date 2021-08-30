import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    minHeight: '20px',
    borderBottom: '1px solid yellow',
    position: 'sticky',
    backgroundColor: '#000000',
    top: '0',
    zIndex: '5'
  },
  link: {
    color: '#ffff00',
    textDecoration: 'none',
    textTransform: ' uppercase',
    '& h1': {
      color: '#ffff00',
      fontSize: '1rem',
      '&:hover': {
        color: '#FEDE00',
      },
    },
    '&:hover': {
      color: '#FEDE00',
    },
  },
})

const HeaderMobile = () => {

  const classes = useStyles();

  return (
    <header className={classes.root}>
      <Link to='/' className={classes.link}><h1>SW Fan-Shop</h1></Link>
      <Link to='/cart' className={classes.link}><ShoppingCartIcon style={{ fontSize: '1.5rem' }} /></Link>
    </header>
  )
}

export default HeaderMobile;