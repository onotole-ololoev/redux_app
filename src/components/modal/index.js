import React from "react";
import './modal.css'
import Button from "../button";
import TextButtonsModal from "./text-buttons";
import InputModal from "./input-modal";


const Modal = ({openAuthModal, authModal, closeAuthModal}) => {

    return (
        <div className={authModal ? 'modal active' : 'modal'} onClick={openAuthModal}>
            <div className='modal__content' onClick={(e) => e.stopPropagation()}>
                <form className='modal__form'>
                    <div className='btn__close' onClick={closeAuthModal}></div>
                    <InputModal />
                    <TextButtonsModal />
                    <Button type='submit' label='Log In'/>
                </form>
            </div>
        </div>
    )
};

export default Modal;