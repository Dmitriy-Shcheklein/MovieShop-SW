import React from 'react';
import FigurineListContainer from '../FigurineList';
import ErrorBoundry from '../ErrorBoundry'
import CartTable from '../CartTable'

const FigurinePage = () => {
  return (
    <ErrorBoundry>
      <FigurineListContainer />
      <CartTable />
    </ErrorBoundry>
  )
}

export default FigurinePage;
