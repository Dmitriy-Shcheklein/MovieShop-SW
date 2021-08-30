import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';
import FigurineList from './FigurineList';
import { figurineFetching } from '../../actions/Actions';
import { useEffect, useContext } from 'react';
import { MyContext } from '../MovieShopContext';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '25vh'
  }
})

const FigurineListContainer = () => {

  const dispatch = useDispatch();
  const movieShopService = useContext(MyContext);

  useEffect(() => {
    figurineFetching(movieShopService, dispatch)
  }, [movieShopService, dispatch])

  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);

  const classes = useStyles();

  if (loading) {
    return (
      <div className={classes.root} >
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