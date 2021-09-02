import React from "react";
import TextButtonsModal from "../../text-buttons";
import Button from "../../button";
import LoginInput from "../../login-input";
import './login-form.css';

const LoginForm = ({closeAuthModal, toggleForm}) => {

    return (
        <form className='modal-content__form'>
            <LoginInput />
            <TextButtonsModal toggleForm={toggleForm} />
            <Button type='submit' label='Log In'/>
        </form>
    )
};

export default LoginForm;