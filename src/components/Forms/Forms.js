import React, { useState } from 'react'
import FormAdress from './FormAdress';
import FormPayment from './FormPayment';
import { useSelector, useDispatch } from 'react-redux';
import FormReviewOrder from './FormReviewOrder';
import FormOfGratitude from './FormOfGratitude';



const Forms = ({ toggleModal }) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [adressLine, setAdressLine] = useState('');
  const [city, setCity] = useState('');
  const [region, setRegion] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [nameCard, setNameCard] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const dispatch = useDispatch()
  const items = useSelector((state) => state.cartList)
  const totalPrice = useSelector((state) => state.allOrder)

  const numberOfOrder = Math.floor(Math.random() * 100000 + 1)

  const [adressBtn, setAdressBtn] = useState(false);
  const toggleAdressBtn = () => {
    setAdressBtn(!adressBtn);
  }

  const [paymentBtn, setPaymentBtn] = useState(false);
  const togglepaymentBtn = () => {
    setPaymentBtn(!paymentBtn);
  }

  const [orderBtn, setOrderBtn] = useState(false)
  const toggleOrderBtn = () => {
    setOrderBtn(!orderBtn);
  }



  const adressBtnStatus = !(firstName && lastName &&
    adressLine && city && region &&
    postalCode && country);

  const paymentBtnStatus = !(nameCard && cardNumber &&
    expiryDate && cvv);


  if (!(firstName && lastName &&
    adressLine && city && region &&
    postalCode && country && adressBtn)) {
    return (
      <div>
        <FormAdress
          firstName={firstName} lastName={lastName} adressLine={adressLine}
          city={city} region={region} postalCode={postalCode}
          country={country}
          setFirstName={(e) => setFirstName(e.target.value)}
          setLastName={(e) => setLastName(e.target.value)}
          setAdressLine={(e) => setAdressLine(e.target.value)}
          setCity={(e) => setCity(e.target.value)}
          setRegion={(e) => setRegion(e.target.value)}
          setPostalCode={(e) => setPostalCode(e.target.value)}
          setCountry={(e) => setCountry(e.target.value)}
          toggleAdressBtn={toggleAdressBtn}
          adressBtnStatus={adressBtnStatus}
        />
      </div>
    )
  } else if (!(nameCard && cardNumber &&
    expiryDate && cvv && paymentBtn)) {
    return (
      <div>
        <FormPayment
          nameCard={nameCard} cardNumber={cardNumber}
          expiryDate={expiryDate} cvv={cvv}
          setNameCard={(e) => setNameCard(e.target.value)}
          setCardNumber={(e) => setCardNumber(e.target.value)}
          setExpiryDate={(e) => setExpiryDate(e.target.value)}
          setCvv={(e) => setCvv(e.target.value)}
          paymentBtnStatus={paymentBtnStatus}
          togglepaymentBtn={togglepaymentBtn}
          toggleAdressBtn={toggleAdressBtn}
        />
      </div>
    );
  } else if (!orderBtn) {
    return (
      <FormReviewOrder
        items={items}
        totalPrice={totalPrice}
        firstName={firstName} lastName={lastName} adressLine={adressLine}
        city={city} region={region} postalCode={postalCode}
        country={country} nameCard={nameCard}
        cardNumber={cardNumber} expiryDate={expiryDate}
        togglepaymentBtn={togglepaymentBtn}
        toggleOrderBtn={toggleOrderBtn}
      />
    )
  } else {
    return <FormOfGratitude
      numberOfOrder={numberOfOrder}
      toggleModal={toggleModal}
    />
  }
}

export default Forms;



