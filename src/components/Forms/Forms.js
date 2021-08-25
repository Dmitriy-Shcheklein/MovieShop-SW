import React, { useState } from 'react'
import FormAdress from './FormAdress';
import FormPayment from './FormPayment';
import { useSelector, useDispatch } from 'react-redux';
import FormReviewOrder from './FormReviewOrder';
import FormOfGratitude from './FormOfGratitude';
import { cleanCart } from '../../actions/Actions';
import { withMovieShopService } from '../Hoc';


const Forms = ({ toggleModal, movieShopService }) => {

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

  let outputData = {
    firstName, lastName, adressLine, city,
    region, postalCode, country, nameCard, cardNumber,
    expiryDate, cvv,
  }

  const dispatch = useDispatch()
  const items = useSelector((state) => state.cartList)
  const totalPrice = useSelector((state) => state.allOrder)

  const mergeCartwithData = (outputData, items) => {
    items.forEach((item, idx) => outputData[`product #${idx}`] = item)
    return outputData
  }

  let numberOfOrder = Math.floor(Math.random() * 100000 + 1)

  const [adressBtn, setAdressBtn] = useState(false);
  const toggleAdressBtn = () => {
    setAdressBtn(!adressBtn);
  }

  const [paymentBtn, setPaymentBtn] = useState(false);
  const togglepaymentBtn = (outputData, items) => {
    mergeCartwithData(outputData, items);
    setPaymentBtn(!paymentBtn);
    console.log(outputData)
  }


  const [orderBtn, setOrderBtn] = useState(false);
  const { fetchDataOutput } = movieShopService;
  const toggleOrderBtn = (dispatch, fetchDataOutput,
    outputData) => {
    setOrderBtn(!orderBtn);
    dispatch(cleanCart());
    fetchDataOutput(outputData);
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
          togglepaymentBtn={() => togglepaymentBtn(outputData, items)}
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
        toggleOrderBtn={() => toggleOrderBtn(dispatch,
          fetchDataOutput, outputData)}
      />
    )
  } else {
    return <FormOfGratitude
      numberOfOrder={numberOfOrder}
      toggleModal={toggleModal}
    />
  }
}

export default withMovieShopService()(Forms);