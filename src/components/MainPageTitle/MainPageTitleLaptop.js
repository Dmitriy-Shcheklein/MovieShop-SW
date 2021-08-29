import { makeStyles } from '@material-ui/styles';
import React from 'react'

const useStyles = makeStyles({
  root: {
    color: '#ffff00',
    fontSize: '1rem',
    textAlign: 'center',
  }
})

const MainPageTitleLaptop = () => {

  const classes = useStyles();

  return (
    <h2 className={classes.root}>
      Welcome to the store that specializes in the sale of Star Wars fan merchandise
    </h2>
  )
}

export default MainPageTitleLaptop;