import React from 'react';
import Forms from '../Forms'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    background: '#f1f1f1',
    zIndex: '100',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '1100px',
    minWidth: '280px',
    padding: '10px 10px',
    borderRadius: '3px',
    '& h2': {
      color: '#000000',
      textAlign: 'center',
      fontSize: '1rem',
      marginTop: '18px',
    },
  },
  btn: {
    cursor: 'pointer',
    position: 'absolute',
    top: '0',
    right: '0',
    border: 'none',
    backgroundColor: 'rgb(0,0,0,0)',
    '& span': {
      fontSize: '2rem',
    }
  }
})

const Modal = ({ modal, toggleModal }) => {

  const classes = useStyles();

  return (
    <>
      {modal && (
        <div className={classes.root}>
          <h2>Fill out the necessary forms so that we can send you the purchase</h2>
          <button
            onClick={toggleModal}
            type="button" className={classes.btn}>
            <span>&times;</span>
          </button>
          <Forms toggleModal={toggleModal} />
        </div>
      )}
    </>
  )
}

export default Modal;

