import { makeStyles } from '@material-ui/styles';
import React from 'react'

const useStyles = makeStyles({
  root: {
    color: '#ffff00',
    fontSize: '0.75rem',
    textAlign: 'center',
  }
})

const MainPageTitleMobile = () => {

  const classes = useStyles();

  return (
    <h2 className={classes.root}>
      Welcome to the store that specializes in the sale of Star Wars fan merchandise
    </h2>
  )
}

export default MainPageTitleMobile;