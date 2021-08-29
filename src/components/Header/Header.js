import React from 'react';
import HeaderDesktop from './HeaderDesktop';
import HeaderLaptop from './HeaderLaptop';
import HeaderTablet from './HeaderTablet';
import HeaderMobile from './HeaderMobile';

import withWidth, { isWidthUp, isWidthDown }
  from '@material-ui/core/withWidth';

const Header = (props) => {

  if (isWidthDown('xs', props.width)) {
    return <HeaderMobile />
  } else if (isWidthDown('sm', props.width)) {
    return <HeaderTablet />
  } else if ((isWidthDown('md', props.width))) {
    return <HeaderLaptop />
  } else if ((isWidthUp('md', props.width))) {
    return <HeaderDesktop />
  } else {
    return null
  }
}

export default withWidth()(Header);