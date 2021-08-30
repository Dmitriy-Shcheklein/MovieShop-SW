import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    maxWidth: '70%',
    margin: '0 auto',
    marginBottom: '40px',
    borderBottom: '1px solid #ffff00',
  },
  imgContainer: {
    marginRight: '60px',
  },
  info: {
    '& h2': {
      margin: '0',
    },
    '& p': {
      margin: '0',
    },
    fontSize: '2rem',
    color: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  btn: {
    width: '150px',
    height: '60px',
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
    width: '350px',
  }
})

const FigurineListItemDesktop = ({ figurine, onAddedtoCart }) => {

  const { id, title, height, mass, hairColor,
    skinColor, EyeColor, gender, price } = figurine;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.imgContainer}>
        <img src={`https://starwars-visualguide.com/assets/img/characters/${id - 100}.jpg`}
          className={classes.img} alt='poster' />
      </div>
      <div className={classes.info} >
        <h2 >{title}</h2>
        <p>Height: {height} </p>
        <p>Weight: {mass} </p>
        <p>Hair Color: {hairColor} </p>
        <p>Skin Color: {skinColor} </p>
        <p>Eye Color: {EyeColor} </p>
        <p>Gender: {gender} </p>
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

export default FigurineListItemDesktop;
