import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    '& h4, p': {
      margin: '0',
      fontSize: '1.5rem',
    },
    '& h3': {
      margin: '0',
    },
    '& p': {
      fontSize: '1rem',
      fontWeight: 'bold',
    },
    '& table': {
      width: '100%',
      textAlign: 'left'
    }
  },
  info: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    '& div': {
      width: '50%',
      padding: '5px'
    }
  },
  border: {
    borderRight: '1px solid #000000',
    marginRight: '5px'
  },
  btnContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
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
})

const FormReviewOrder = (props) => {

  const { items, totalPrice, firstName,
    lastName, adressLine, city,
    region, postalCode, country,
    nameCard, cardNumber, expiryDate,
    togglepaymentBtn, toggleOrderBtn } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h3>Check your order</h3>
      <p>Total price: {totalPrice}</p>
      <table>
        <thead>
          <tr>
            <th>Count</th>
            <th>Title</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, idx) => {
            return (
              <tr key={idx}>
                <Row
                  item={item}
                />
              </tr>
            )
          })
          }
        </tbody>
      </table>
      <div className={classes.info} >
        <div className={classes.border}>
          <h4>Shipping</h4>
          <p>Name: {firstName} {lastName}</p><br />
          <p>Adress: {adressLine}, {city}, {region}, {postalCode}, {country}</p>
        </div>
        <div>
          <h4>Payment details</h4>
          <p>Cart holder: {nameCard}</p>
          <p>Card number: {cardNumber}</p>
          <p>Expiry Date: {expiryDate}</p>
        </div>
      </div>
      <div className={classes.btnContainer}>
        <button
          onClick={togglepaymentBtn}
          type='button'
        >Back</button>
        <button
          onClick={toggleOrderBtn}
          type='button'
        >Place order</button>
      </div>
    </div>
  )
}

export default FormReviewOrder;

const Row = ({ item }) => {

  const { title, count, total } = item;

  return (
    <>
      <td>{count}</td>
      <td>{title}</td>
      <td>${total}</td>
    </>
  )
}
