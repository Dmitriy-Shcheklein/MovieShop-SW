import React from 'react';
import FigurineListItem from './FigurineListItem';
import { useSelector, useDispatch } from 'react-redux';



const FigurineList = () => {

  // const dispatch = useDispatch();
  const figurines = useSelector((state) => state.figurines)




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
              // onAddedtoCart={() => onAddedtoCart(figurine.id)}
              />
            </li>
          );
        })
      }
    </ul>
  )
}

export default FigurineList;