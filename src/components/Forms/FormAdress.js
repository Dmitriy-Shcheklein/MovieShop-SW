import React from 'react';


const FormAdress = (props) => {

  const { firstName, lastName, adressLine,
    city, region, postalCode, country,
    setFirstName, setLastName, setAdressLine,
    setCity, setRegion, setPostalCode,
    setCountry, toggleAdressBtn, adressBtnStatus,
    email, setEmail,
  } = props;

  return (
    <div>
      <h3>Shipping Adress</h3>
      <form type='text'>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">First Name</span>
          <input
            onChange={setFirstName}
            value={firstName}
            type="text" className="form-control"
            placeholder="Enter a first name" />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Last Name</span>
          <input
            onChange={setLastName}
            value={lastName}
            type="text" className="form-control"
            placeholder="Enter a last name" />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Adress Line</span>
          <input
            onChange={setAdressLine}
            value={adressLine}
            type="text" className="form-control"
            placeholder="Enter a adress line" />
        </div>
        <div className="input-group mb-3 cityRegion">
          <div>
            <span className="input-group-text" id="basic-addon1">City</span>
            <input
              onChange={setCity}
              value={city}
              type="text" className="form-control"
              placeholder="Enter a city" />
          </div>
          <div>
            <span className="input-group-text" id="basic-addon1">Region</span>
            <input
              onChange={setRegion}
              value={region}
              type="text" className="form-control"
              placeholder="Enter a state/province" />
          </div>
        </div>
        <div className="input-group mb-3 postalCountry">
          <div>
            <span className="input-group-text" id="basic-addon1">Postal Code</span>
            <input
              onChange={setPostalCode}
              value={postalCode}
              type="text" className="form-control"
              placeholder="Enter a postal Code" />
          </div>
          <div>
            <span className="input-group-text" id="basic-addon1">Country</span>
            <input
              onChange={setCountry}
              value={country}
              type="text" className="form-control"
              placeholder="Enter a country" />
          </div>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">E-mail</span>
          <input
            onChange={setEmail}
            value={email}
            type="text" className="form-control"
            placeholder="Enter email" />
        </div>
        <div className='buttonsGroup'>
          <button
            onClick={toggleAdressBtn}
            disabled={adressBtnStatus}
            type='button'
            className='btn btn-dark'>Next</button>
        </div>
      </form>
    </div>
  )
}

export default FormAdress

