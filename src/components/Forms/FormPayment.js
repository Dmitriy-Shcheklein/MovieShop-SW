import React from 'react'

const FormPayment = (props) => {

  const { nameCard, cardNumber, expiryDate,
    cvv, setNameCard, setCardNumber,
    setExpiryDate, setCvv, paymentBtnStatus,
    togglepaymentBtn, toggleAdressBtn } = props;

  return (
    <>
      <h3>Shipping Adress</h3>
      <form type='submit'>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Name on card*</span>
          <input
            onChange={setNameCard}
            value={nameCard}
            type="text" className="form-control"
            placeholder="Enter name on card" />
          <span className="input-group-text" id="basic-addon1">Card number*</span>
          <input
            onChange={setCardNumber}
            value={cardNumber}
            type="text" className="form-control"
            placeholder="Enter a cart nuber" />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Expiry date*</span>
          <input
            onChange={setExpiryDate}
            value={expiryDate}
            type="text" className="form-control"
            placeholder="Enter expiry date" />
          <span className="input-group-text" id="basic-addon1">CVV*</span>
          <input
            onChange={setCvv}
            value={cvv}
            type="text" className="form-control"
            placeholder="Enter a cvv" />
        </div>
        <div className='buttonsGroup'>
          <button
            onClick={toggleAdressBtn}
            type='button'
            className='btn btn-dark'>Back</button>
          <button
            onClick={togglepaymentBtn}
            disabled={paymentBtnStatus}
            type='button'
            className='btn btn-dark'>Next</button>
        </div>
      </form>
    </>
  )
}

export default FormPayment;
