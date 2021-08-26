import React from 'react';
import FigurineListContainer from '../FigurineList';
import ErrorBoundry from '../ErrorBoundry'
import CartTable from '../CartTable'

const FigurinePage = () => {
  return (
    <ErrorBoundry>
      <section>
        <FigurineListContainer />
        <CartTable />
      </section>
    </ErrorBoundry>
  )
}

export default FigurinePage;
