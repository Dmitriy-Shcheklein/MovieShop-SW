import React from 'react';
import './MainPage.scss';
import Slider from '../Slider';
import CartTable from '../CartTable';


const MainPage = () => {

  return (
    <main className='main'>
      <h2 className='main_title'>Welcome to the store that specializes in the sale of Star Wars fan merchandise</h2>
      <Slider />
      <CartTable />
    </main>

  )
}

export default MainPage;
