import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    marginTop: '15%',
    '& h1, p': {
      color: '#2a9fd6',
    },
    '& p': {
      fontSize: '3rem',
    }
  }
})


const ErrorIndicator = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>WARNING!!!!</h1>
      <p>Something bad has happened</p>
      <p>We use force to fix the problem as quickly as possible...</p>
      <p>well, or droids...</p>
    </div>
  )
}

export default ErrorIndicator;