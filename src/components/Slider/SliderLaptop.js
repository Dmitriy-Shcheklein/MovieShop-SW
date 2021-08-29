import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    maxHeight: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '30px',
    position: 'relative',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexBasis: '55%'
  },
  btn: {
    display: 'inline-block',
    backgroundColor: '#ffff00',
    border: 'none',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    width: '140px',
    height: '70px',
    position: 'absolute',
    top: 'calc(50%-35px)',
    right: '30px',
    borderRadius: '5px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#FEDE00'
    }
  },
  link: {
    marginTop: '20px',
    display: 'inline-block',
    backgroundColor: '#ffff00',
    border: 'none',
    fontSize: '1rem',
    fontWeight: 'bold',
    width: '140px',
    height: '65px',
    cursor: 'pointer',
    textDecoration: 'none',
    color: 'black',
    textAlign: 'center',
    padding: '20px',
    borderRadius: '5px',
    textTransform: 'uppercase',
    '&:hover': {
      backgroundColor: '#FEDE00'
    }
  },
  title: {
    color: '#ffff00',
    fontSize: '2rem',
    textTransform: 'uppercase',
  }

})

const SliderLaptop = (props) => {

  const { img, product, link, toggleImg } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <h3 className={classes.title}>{product}</h3>
        <img src={img} alt={product} />
        <button
          onClick={toggleImg}
          className={classes.btn}
        >Other product
        </button>
        <Link to={link} className={classes.link}>
          Buy
        </Link>
      </div>
    </div>
  );
};

export default SliderLaptop;

