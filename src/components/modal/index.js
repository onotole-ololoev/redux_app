import React from "react";
import './modal.css'
import Button from "../button";
import Input from "../input";

const Modal = ({active, setActive}) => {

    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className='modal--content' onClick={(e) => e.stopPropagation()}>
                <form className='modal--form'>
                    <div className='close' onClick={() => setActive(false)}></div>
                    <Input label='Login' placeholder='Enter login'/>
                    <div className='modal--form_item'>
                        <label>Password*</label>
                        <Input variant='password' />
                        <div className="error-message">Password is a required field.</div>
                    </div>
                    <Button variant='submit' label='Enter'/>
                </form>
                <div className='modal--form_links'>
                    <a href='#' className='modal--form_link'>Forgot password</a>
                    <a href='#' className='modal--form_link'>Create an account</a>
                </div>
            </div>
        </div>
    )
};

export default Modal;