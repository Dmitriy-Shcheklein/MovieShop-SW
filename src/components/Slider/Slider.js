import React from 'react';
import { useState } from 'react';
import Poster from './Poster.png';
import DarthVeider from './DarthVeider.png';
import SliderDesktop from './SliderDesktop';
import SliderLaptop from './SliderLaptop';
import SliderTablet from './SliderTablet';
import SliderMobile from './SliderMobile';
import withWidth, { isWidthUp, isWidthDown }
  from '@material-ui/core/withWidth';

const Slider = (props) => {

  const [img, setImg] = useState(Poster);
  const [link, setLink] = useState('/movies/');
  const [product, setProduct] = useState('Buy a DVD')

  const toggleImg = () => {
    img === Poster ? setImg(DarthVeider) : setImg(Poster);
    img === Poster ? setLink('/figurine') : setLink('/movies/');
    img === Poster ? setProduct('buy a collectible figurine') : setProduct('buy a DVD');
  }

  if (isWidthDown('xs', props.width)) {
    return <SliderMobile
      toggleImg={toggleImg}
      link={link}
      product={product}
      img={img} />
  } else if (isWidthDown('sm', props.width)) {
    return <SliderTablet
      toggleImg={toggleImg}
      link={link}
      product={product}
      img={img} />
  } else if ((isWidthDown('md', props.width))) {
    return <SliderLaptop
      toggleImg={toggleImg}
      link={link}
      product={product}
      img={img} />
  } else if ((isWidthUp('md', props.width))) {
    return <SliderDesktop
      toggleImg={toggleImg}
      link={link}
      product={product}
      img={img} />
  } else {
    return null
  }
};

export default withWidth()(Slider);

