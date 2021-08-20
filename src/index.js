import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';
import ErrorBoundry from './components/ErrorBoundry';
import MovieShopService from './Services/MovieShopServices';
import { MovieShopProvider } from './components/MovieShopContext';
import store from './Store';

const movieShopService = new MovieShopService();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundry>
        <MovieShopProvider value={movieShopService}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </MovieShopProvider>
      </ErrorBoundry>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
