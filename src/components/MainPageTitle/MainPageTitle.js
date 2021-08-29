import React from 'react';
import MainPageTitleMobile from './MainPageTitleMobile';
import MainPageTitleTablet from './MainPageTitleTablet';
import MainPageTitleLaptop from './MainPageTitleLaptop';
import MainPageTitleDesktop from './MainPageTitleDesktop';

import withWidth, { isWidthUp, isWidthDown } from '@material-ui/core/withWidth';

const MainPageTitle = (props) => {

  if (isWidthDown('xs', props.width)) {
    return <MainPageTitleMobile />
  } else if (isWidthDown('sm', props.width)) {
    return <MainPageTitleTablet />
  } else if (isWidthDown('md', props.width)) {
    return <MainPageTitleLaptop />
  } else if ((isWidthUp('md', props.width))) {
    return <MainPageTitleDesktop />
  }

  return null;
}

export default withWidth()(MainPageTitle);