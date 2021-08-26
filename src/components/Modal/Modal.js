import React from 'react';
import Forms from '../Forms'
import './Modal.scss';

const Modal = ({ modal, toggleModal }) => {

  return (
    <>
      {modal && (<div className='modal_1'>
        {/* <div onClick={toggleModal} className='overlay'></div> */}
        <div className='modalContent'>
          <h2>Fill out the necessary forms so that we can send you the purchase</h2>
          <button
            onClick={toggleModal}
            type="button" className="close closeModal">
            <span>&times;</span>
          </button>
          <Forms toggleModal={toggleModal} />
        </div>
      </div>
      )}
    </>
  )
}

export default Modal;

