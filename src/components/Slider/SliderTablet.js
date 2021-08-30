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
    borderRadius: '5px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#FEDE00'
    }
  },
  link: {
    display: 'inline-block',
    backgroundColor: '#ffff00',
    border: 'none',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    width: '140px',
    height: '70px',
    cursor: 'pointer',
    textDecoration: 'none',
    color: 'black',
    textAlign: 'center',
    padding: '20px',
    borderRadius: '5px',
    textTransform: 'uppercase',
    '&:hover': {
      backgroundColor: '#FEDE00'
    },
    marginRight: '15px',
  },
  title: {
    color: '#ffff00',
    fontSize: '2rem',
    textTransform: 'uppercase',
  },
  buttons: {
    display: 'flex',
    margin: '20px',
  }

})

const SliderTablet = (props) => {

  const { img, product, link, toggleImg } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <h3 className={classes.title}>{product}</h3>
        <img src={img} alt={product} />
        <div className={classes.buttons}>
          <Link to={link} className={classes.link}>
            Buy
          </Link>
          <button
            onClick={toggleImg}
            className={classes.btn}
          >Other product
          </button>
        </div>
      </div>
    </div>
  );
};

export default SliderTablet;

