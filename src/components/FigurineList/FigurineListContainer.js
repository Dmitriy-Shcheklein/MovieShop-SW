import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';
import FigurineList from './FigurineList';
import {
  figurinesError, figurinesLoadedSuccess, figurinesLoading,
} from '../../actions/Actions';
import { useEffect, useContext } from 'react';
import { MyContext } from '../MovieShopContext';

import './FigurineListContainer.scss';

const FigurineListContainer = () => {

  const dispatch = useDispatch();
  const movieShopService = useContext(MyContext);

  const updateFigurines = (movieShopService, dispatch) => {
    dispatch(figurinesLoading());
    movieShopService.getAllFigurines()
      .then((data) => dispatch(figurinesLoadedSuccess(data)))
      .catch((error) => dispatch(figurinesError(error)))
  }

  useEffect(() => {
    updateFigurines(movieShopService, dispatch)
  }, [movieShopService, dispatch])

  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);

  if (loading) {
    return (
      <div className='alt'>
        <Spinner />
      </div>
    )
  }

  if (error) {
    return <ErrorIndicator />
  }

  return <FigurineList />
}

export default FigurineListContainer