import React from 'react';
import { MovieShopConsumer } from '../MovieShopContext';

const withMovieShopService = () => (Wrapped) => {

  return (props) => {
    return (
      <MovieShopConsumer>
        {
          (movieShopService) => {
            return <Wrapped {...props}
              movieShopService={movieShopService} />
          }
        }
      </MovieShopConsumer>
    )
  }
}

export default withMovieShopService;