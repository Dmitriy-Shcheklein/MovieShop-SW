import React from 'react';
import { MyContext } from '../MovieShopContext/MovieShopContext';

const withMovieShopService = () => (Wrapped) => {

  return (props) => {
    return (
      <MyContext.Consumer>
        {
          (movieShopService) => {
            return <Wrapped {...props}
              movieShopService={movieShopService} />
          }
        }
      </MyContext.Consumer>
    )
  }
}

export default withMovieShopService;