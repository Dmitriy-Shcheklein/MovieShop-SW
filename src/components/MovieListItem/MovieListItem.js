import React from 'react';
import './MovieListItem.scss';



const MovieListItem = ({ movie, onAddetoCart }) => {

  const { title, releaseDate, director,
    episodeNumber, price, id } = movie;

  return (
    <div className='moveListItem'>
      <div className="movieListItem_poster">
        <img src={`https://starwars-visualguide.com/assets/img/films/${id}.jpg`} alt='poster' />
      </div>
      <div className='movieDetails'>
        <h2 className='movieTitle'>Movie title: {title}</h2>
        <div className='releaseDate'>
          <p>Date of release: {releaseDate} </p>
        </div>
        <div className='director'>
          <p>Director: {director}</p>
        </div>
        <div className='episodeNumber'>
          <p>Episode Number: {episodeNumber}</p>
        </div>
        <div className='price'>
          <p>Price: {price}</p>
        </div>
        <button
          onClick={onAddetoCart}
          className='btn btn-info add-to-cart'>
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default MovieListItem;
