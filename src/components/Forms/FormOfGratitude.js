import React from 'react';
import { useSelector } from 'react-redux';
import ErrorIndicatorOrder from '../ErrorIndicator/ErrorIndicatorOrder';
import ModalSpinner from '../Modal/ModalSpinner';
import Gratitude from './Gratituge';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
})


const FormOfGratitude = ({ numberOfOrder, toggleModal }) => {

  const loading = useSelector((state) => state.sendingForm);
  const error = useSelector((state) => state.sendingFormError);
  const orderInfo = useSelector((state) => state.orderInfo);

  const classes = useStyles();

  if (loading) {
    return (
      <div className={classes.root}>
        <ModalSpinner />
        <p>Your order is being sent</p>
      </div>
    )
  }

  if (error) {
    return <ErrorIndicatorOrder
      toggleModal={toggleModal}
    />
  }

  console.log('INFO OF ORDER, response from the server', orderInfo);

  return <Gratitude
    numberOfOrder={numberOfOrder}
    toggleModal={toggleModal}
  />
}

export default FormOfGratitude;
