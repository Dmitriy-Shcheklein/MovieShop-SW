import React from 'react';
import { useSelector } from 'react-redux';
import ModalSpinner from '../Modal/ModalSpinner';




const FormOfGratitude = ({ numberOfOrder, toggleModal }) => {

  const loading = useSelector((state) => state.sendingForm);
  const error = useSelector((state) => state.sendingFormError);
  const orderInfo = useSelector((state) => state.orderInfo);

  if (loading) {
    return (
      <div className='modalSpinner'>
        <ModalSpinner />
        <p>Your order is being sent</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className='gratitude'>
        <h3>OOPS!!!</h3>
        <p>Your order has not been placed. <br />
          Please, try again later.</p>
        <button
          onClick={toggleModal}
          className='btn btn-dark'>Close</button>
      </div>
    )
  }

  console.log('INFO OF ORDER, response from the server', orderInfo);

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
