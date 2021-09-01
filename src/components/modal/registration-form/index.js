import React from "react";
import TextButtonsModal from "../../text-buttons";
import Button from "../../button";
import LoginInput from "../../login-input";

const RegistrationForm = ({closeAuthModal}) => {

    return (
        <form className='modal__form'>
            <div className='btn__close' onClick={closeAuthModal}></div>
            <LoginInput />
            <TextButtonsModal />
            <Button type='submit' label='ХУЙ'/>
        </form>
    )
};

export default RegistrationForm;