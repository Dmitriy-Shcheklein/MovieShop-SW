import React from 'react';
import withWidth, { isWidthDown, isWidthUp }
  from '@material-ui/core/withWidth';
import FigurineListItemDesktop from './FigurineListItemDesktop';
import FigurineListItemLaptop from './FigurineListItemLaptop';
import FigurineListItemTablet from './FigurineListItemTablet';
import FigurineListItemMobile from './FigurineListItemMobile';

const FigurineListItem = (props) => {

  const { figurine, onAddedtoCart } = props;


  if (isWidthDown('xs', props.width)) {
    return <FigurineListItemMobile
      figurine={figurine}
      onAddedtoCart={onAddedtoCart}
    />
  } else if (isWidthDown('sm', props.width)) {
    return <FigurineListItemTablet
      figurine={figurine}
      onAddedtoCart={onAddedtoCart}
    />
  } else if ((isWidthDown('md', props.width))) {
    return <FigurineListItemLaptop
      figurine={figurine}
      onAddedtoCart={onAddedtoCart}
    />
  } else if ((isWidthUp('md', props.width))) {
    return <FigurineListItemDesktop
      figurine={figurine}
      onAddedtoCart={onAddedtoCart}
    />
  } else {
    return null
  }

}

export default withWidth()(FigurineListItem);
