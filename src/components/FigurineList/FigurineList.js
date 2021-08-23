import React from 'react';
import FigurineListItem from './FigurineListItem';
import { useSelector, useDispatch } from 'react-redux';
import { productAddToCart } from '../../actions/Actions';

const FigurineList = () => {

  const dispatch = useDispatch();
  const figurines = useSelector((state) => state.figurines)

  const onAddedtoCart = (id) => {
    dispatch(productAddToCart(id));
  }

  return (
    <ul className='list'>
      {
        figurines.map((figurine, idx) => {
          return (
            <li
              className='listItem'
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