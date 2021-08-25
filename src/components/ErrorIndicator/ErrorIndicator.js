import React from 'react';

import './ErrorIndicator.scss';

const ErrorIndicator = () => {
  return (
    <div className='errorIndicator'>
      <h1>WARNING!!!!</h1>
      <p>Something bad has happened</p>
      <p>We use force to fix the problem as quickly as possible...</p>
      <p>well, or droids...</p>
    </div>
  )
}

export default ErrorIndicator;