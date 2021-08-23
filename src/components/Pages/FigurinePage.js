import React from 'react';
import FigurineListContainer from '../FigurineList';
import { Fragment } from 'react';
import CartTable from '../CartTable'

const FigurinePage = () => {
  return (
    <Fragment>
      <FigurineListContainer />
      <CartTable />
    </Fragment>
  )
}

export default FigurinePage;
