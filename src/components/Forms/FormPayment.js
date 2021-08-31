import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    '& form': {
      width: '100%',
    },
    '& h3': {
      margin: '0',
      marginBottom: '5px',
    },
    '& button': {
      color: 'white',
      backgroundColor: '#000000',
      borderRadius: '3px',
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
    },
  },
  inputForm: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    marginBottom: '3px',
    '& span': {
      width: '30%',
      backgroundColor: '#000000',
      color: '#ffffff',
      border: '1px solid #000000',
      borderRadius: '2px 0 0 2px',
      paddingLeft: '5px'
    },
    '& input': {
      width: '70%',
      border: '1px solid #000000',
      borderRadius: '0 2px 2px 0',
      paddingLeft: '3px',
      '&:focus': {
        boxShadow: 'inset 0 0 4px rgba(0,0,0,.5)',
        outline: 'none'
      }
    }
  },
  btnContainer: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
})

const FormPayment = (props) => {

  const { nameCard, cardNumber, expiryDate,
    cvv, setNameCard, setCardNumber,
    setExpiryDate, setCvv, paymentBtnStatus,
    togglepaymentBtn, toggleAdressBtn } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h3>Payment Info</h3>
      <form type='submit'>
        <div className={classes.inputForm}>
          <span>Name on card*</span>
          <input
            onChange={setNameCard}
            value={nameCard}
            type="text"
            placeholder="Enter name on card" />
        </div>
        <div className={classes.inputForm}>
          <span>Card number*</span>
          <input
            onChange={setCardNumber}
            value={cardNumber}
            type="text"
            placeholder="Enter a cart number" />
        </div>
        <div className={classes.inputForm}>
          <span>Expiry date*</span>
          <input
            onChange={setExpiryDate}
            value={expiryDate}
            type="text"
            placeholder="Enter expiry date" />
        </div>
        <div className={classes.inputForm}>
          <span>CVV*</span>
          <input
            onChange={setCvv}
            value={cvv}
            type="text"
            placeholder="Enter a cvv" />
        </div>
        <div className={classes.btnContainer}>
          <button
            onClick={toggleAdressBtn}
            type='button'
          >Back</button>
          <button
            onClick={togglepaymentBtn}
            disabled={paymentBtnStatus}
            type='button'
          >Next</button>
        </div>
      </form>
    </div>
  )
}

export default FormPayment;
