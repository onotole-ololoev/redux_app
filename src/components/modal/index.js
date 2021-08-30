import React from "react";
import './modal.css'
import Button from "../button";
import Input from "../input";
import logo from "../../images/logo.png";

const Modal = ({openAuthModal, authModal, closeAuthModal}) => {

    return (
        <div className={authModal ? 'modal active' : 'modal'} onClick={openAuthModal}>
            <div className='modal--content' onClick={(e) => e.stopPropagation()}>
                <form className='modal--form'>
                    <div className='close' onClick={closeAuthModal}></div>
                    <div>
                        <img src={logo} alt='logo' className='logo--modal'/>
                    </div>
                    <Input label='Login*' placeholder='Enter login' variant='authModal'/>
                    <Input  label='Password*' placeholder='Enter password' variant='authModal' type='password'/>
                    <div className='modal--form_links'>
                        <a href='#' className='modal--form_link'>Forgot your password?</a>
                        <a href='#' className='modal--form_link'>Create an account</a>
                    </div>
                    <Button type='submit' label='Log In'/>
                </form>
            </div>
        </div>
    )
};

export default Modal;