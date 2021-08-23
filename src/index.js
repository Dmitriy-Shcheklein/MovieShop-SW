import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';
import ErrorBoundry from './components/ErrorBoundry';
import MovieShopService from './Services/MovieShopServices';
import { MyContext } from './components/MovieShopContext';
import store from './Store';

const movieShopService = new MovieShopService();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundry>
        <MyContext.Provider value={movieShopService}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </MyContext.Provider>
      </ErrorBoundry>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
