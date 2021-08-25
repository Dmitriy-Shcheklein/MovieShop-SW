import React from 'react';

import "./FormOfGratitude.scss"

const FormOfGratitude = ({ numberOfOrder, toggleModal }) => {

  return (
    <div className='gratitude'>
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

export default FormOfGratitude;
