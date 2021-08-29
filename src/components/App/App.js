import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header';
import { MoviesPage, CartPage, MainPage, FigurinePage } from '../Pages';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    margin: '0 auto',
    maxWidth: '1440px',
    minHeight: '100vh',
    backgroundColor: '#000000',
    backgroundSize: 'cover',
  }
})

const App = () => {

  const classes = useStyles();

  return (
    <CssBaseline>
      <div className={classes.root}>
        <Header />
        <Switch>
          <Route
            path='/' exact component={MainPage} />
          <Route
            path='/movies' component={MoviesPage} />
          <Route
            path='/figurine' component={FigurinePage} />
          <Route
            path='/cart' component={CartPage} />
        </Switch>
      </div>
    </CssBaseline>
  )
}

export default App;