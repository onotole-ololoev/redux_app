import React from "react";
import './modal-header.css'


const ModalHeader = ({closeAuthModal, variant}) => {

    return (
        <div className='modal-header'>
            <h3 className='modal-header__title'>{variant}</h3>
            <button className='btn__close' onClick={closeAuthModal}></button>
        </div>
    )
};

export default ModalHeader;