import React from 'react';

import { Route, Switch } from 'react-router-dom';
import Header from '../Header';
import { MoviesPage, CartPage, MainPage, FigurinePage } from '../Pages';

import './App.scss';




const App = () => {

  return (
    <div className='container'>
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
  )
}

export default App;