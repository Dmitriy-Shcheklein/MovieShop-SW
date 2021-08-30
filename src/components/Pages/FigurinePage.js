import React from 'react';
import FigurineListContainer from '../FigurineList';
import ErrorBoundry from '../ErrorBoundry'

const FigurinePage = () => {
  return (
    <ErrorBoundry>
      <section>
        <FigurineListContainer />
      </section>
    </ErrorBoundry>
  )
}

export default FigurinePage;
