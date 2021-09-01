import React from "react";
import TextButtonsModal from "../../text-buttons";
import Button from "../../button";
import LoginInput from "../../login-input";
import './login-form.css';

const LoginForm = ({closeAuthModal, toggleForm}) => {

    return (
        <div className='modal-wrapper'>
            <div className='modal-header'>
                <h3 className='modal-header__title'>Log In</h3>
                <div className='btn__close' onClick={closeAuthModal}></div>
            </div>
            <div className='modal-content'>
                <form className='modal-content__form'>
                    <LoginInput />
                    <TextButtonsModal toggleForm={toggleForm} />
                    <Button type='submit' label='Log In'/>
                </form>
            </div>
        </div>
    )
};

export default LoginForm;