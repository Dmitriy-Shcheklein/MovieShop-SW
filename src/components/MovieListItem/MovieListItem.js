import React from 'react';

const MovieListItem = ({ movie, onAddetoCart }) => {
  return (
    <div className='moveListItem'>
      <div className="MovieListItem_poster">
        <img alt='poster' />
      </div>
      <div className='movieDetails'>
        <h2 className='movieTitle'>title</h2>
        <div className='releaseDate'>
          <p>releaseDate</p>
        </div>
        <div className='director'>
          <p>Director</p>
        </div>
        <div className='episodeNumber'>
          <p>episodeNumber:</p>
        </div>
        <div className='price'>
          <p>Price</p>
        </div>
      </div>
      <button
        onClick={onAddetoCart}
        className='btn btn-info add-to-cart'>
        Add to cart
      </button>
    </div>
  )
}

export default MovieListItem;
