import React from "react";
import TextButtonsModal from "../../text-buttons";
import Button from "../../button";
import LoginInput from "../../login-input";

const LoginForm = ({closeAuthModal, toggleForm}) => {

    return (
        <form className='modal__form'>
            <div className='btn__close' onClick={closeAuthModal}></div>
            <LoginInput />
            <TextButtonsModal toggleForm={toggleForm} />
            <Button type='submit' label='Log In'/>
        </form>
    )
};

export default LoginForm;