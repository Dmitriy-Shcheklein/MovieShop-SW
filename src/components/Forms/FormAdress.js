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

const FormAdress = (props) => {

  const { firstName, lastName, adressLine,
    city, region, postalCode, country,
    setFirstName, setLastName, setAdressLine,
    setCity, setRegion, setPostalCode,
    setCountry, toggleAdressBtn, adressBtnStatus,
    email, setEmail,
  } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h3>Shipping Adress</h3>
      <form type='text' className={classes.form}>
        <div className={classes.inputForm}>
          <span>First Name</span>
          <input
            onChange={setFirstName}
            value={firstName}
            type="text"
            placeholder="Enter a first name" />
        </div>
        <div className={classes.inputForm}>
          <span>Last Name</span>
          <input
            onChange={setLastName}
            value={lastName}
            type="text"
            placeholder="Enter a last name" />
        </div>
        <div className={classes.inputForm}>
          <span>Adress Line</span>
          <input
            onChange={setAdressLine}
            value={adressLine}
            type="text"
            placeholder="Enter a adress line" />
        </div>
        <div className={classes.inputForm}>
          <span>City</span>
          <input
            onChange={setCity}
            value={city}
            type="text"
            placeholder="Enter a city" />
        </div>
        <div className={classes.inputForm}>
          <span>Region</span>
          <input
            onChange={setRegion}
            value={region}
            type="text"
            placeholder="Enter a state/province" />
        </div>
        <div className={classes.inputForm}>
          <span>Postal Code</span>
          <input
            onChange={setPostalCode}
            value={postalCode}
            type="text"
            placeholder="Enter a postal Code" />
        </div>
        <div className={classes.inputForm}>
          <span>Country</span>
          <input
            onChange={setCountry}
            value={country}
            type="text"
            placeholder="Enter a country" />
        </div>
        <div className={classes.inputForm} >
          <span>E-mail</span>
          <input
            onChange={setEmail}
            value={email}
            type="text"
            placeholder="Enter email" />
        </div>
        <div className={classes.btnContainer}>
          <button
            onClick={toggleAdressBtn}
            disabled={adressBtnStatus}
            type='button'
          >Next</button>
        </div>
      </form>
    </div>
  )
}

export default FormAdress

