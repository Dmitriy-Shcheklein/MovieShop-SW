import React from 'react';

import './FigurineListItem.scss';

const FigurineListItem = ({ figurine, onAddedtoCart }) => {

  const { id, name, height, mass, hairColor,
    skinColor, EyeColor, gender, price } = figurine;

  return (
    <div className='figurineListItem'>
      <div className="figurineListItem_poster">
        <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          alt='poster' />
      </div>
      <div className='figurineDetails'>
        <h2 className='figurineName'>{name}</h2>
        <div className='figurineSpecifications'>
          <p>Height: {height} </p>
          <p>Weight: {mass} </p>
          <p>Hair Color: {hairColor} </p>
          <p>Skin Color: {skinColor} </p>
          <p>Eye Color: {EyeColor} </p>
          <p>Gender: {gender} </p>
        </div>
        <p>Price: ${price}</p>
        <button
          onClick={onAddedtoCart}
          className='btn btn-primary button'>
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default FigurineListItem;
