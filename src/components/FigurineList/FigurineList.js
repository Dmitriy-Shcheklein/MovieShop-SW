import React from 'react';
import FigurineListItem from './FigurineListItem';
import { useSelector, useDispatch } from 'react-redux';
import { productAddToCart } from '../../actions/Actions';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  li: {
    listStyleType: 'none',
    margin: '0 auto',
  },
  ul: {
    padding: '0',
  }
})

const FigurineList = () => {

  const dispatch = useDispatch();
  const figurines = useSelector((state) => state.figurines)

  const onAddedtoCart = (id) => {
    dispatch(productAddToCart(id));
  }

  const classes = useStyles();

  return (
    <ul className={classes.ul}>
      {
        figurines.map((figurine, idx) => {
          return (
            <li
              className={classes.li}
              key={idx}>
              <FigurineListItem
                figurine={figurine}
                onAddedtoCart={() => onAddedtoCart(figurine.id)}
              />
            </li>
          );
        })
      }
    </ul>
  )
}

export default FigurineList;