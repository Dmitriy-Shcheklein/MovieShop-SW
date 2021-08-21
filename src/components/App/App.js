import React from 'react';

import { Route, Switch } from 'react-router-dom';
import Header from '../Header';
import { MoviesPage, CartPage } from '../Pages';




const App = () => {

  return (
    <div className='container'>
      <Header />
      <Switch>
        <Route
          path='/' exact component={MoviesPage} />
        <Route
          path='/cart' component={CartPage} />
      </Switch>
    </div>
  )
}

export default App;