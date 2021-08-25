import React from 'react';

import './FormReviewOrder.scss';

const FormReviewOrder = (props) => {

  const { items, totalPrice, firstName,
    lastName, adressLine, city,
    region, postalCode, country,
    nameCard, cardNumber, expiryDate,
    togglepaymentBtn, toggleOrderBtn } = props;

  return (
    <div>
      <h3>Check your order</h3>
      <p>Total price: {totalPrice}</p>
      <table className='table'>
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
      <div className='orderDetails'>
        <div className='shipping'>
          <h4>Shipping</h4>
        </div>
        <div className='paymentDetails'>
          <h4>Payment details</h4>
        </div>
      </div>
      <div className='detailsWrapper'>
        <div className='nameAdress'>
          <p>{firstName} {lastName}</p><br />
          <p>{adressLine}, {city}, {region}, {postalCode}, {country}</p>
        </div>
        <div className='cardDetails'>
          <p>Cart holder: {nameCard}</p>
          <p>Card number: {cardNumber}</p>
          <p>Expiry Date: {expiryDate}</p>
        </div>
      </div>
      <div className='buttonsGroup'>
        <button
          onClick={togglepaymentBtn}
          type='button'
          className='btn btn-dark'>Back</button>
        <button
          onClick={toggleOrderBtn}
          type='button'
          className='btn btn-dark'>Place order</button>
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
      <td>{total}</td>
    </>
  )
}
