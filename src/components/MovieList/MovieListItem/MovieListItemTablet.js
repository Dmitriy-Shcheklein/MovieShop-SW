import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    maxWidth: '90%',
    margin: '0 auto',
    marginBottom: '40px',
    borderBottom: '1px solid #ffff00',
    paddingLeft: '10%'
  },
  imgContainer: {
    marginRight: '5%',
  },
  info: {
    '& h2': {
      margin: '0',
    },
    '& p': {
      margin: '0',
    },
    fontSize: '1rem',
    color: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  btn: {
    width: '120px',
    height: '40px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#ffff00',
    fontSize: '1rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    '&:hover': {
      backgroundColor: '#fede00'
    },
    cursor: 'pointer',
    marginTop: '10px',
  },
  img: {
    width: '250px',
  }
})

const MovieListItemTablet = ({ movie, onAddedtoCart }) => {

  const classes = useStyles();

  const { title, releaseDate, director,
    episodeNumber, price, id } = movie;

  return (

    <div className={classes.root}>
      <div className={classes.imgContainer}>
        <img src={`https://starwars-visualguide.com/assets/img/films/${id}.jpg`}
          className={classes.img}
          alt='poster' />
      </div>
      <div className={classes.info} >
        <h2 >{title}</h2>
        <p>Date of release: {releaseDate} </p>
        <p>Director: {director}</p>
        <p>Episode Number: {episodeNumber}</p>
        <p>Price: ${price}</p>
        <button
          className={classes.btn}
          onClick={onAddedtoCart}
        >
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default MovieListItemTablet;