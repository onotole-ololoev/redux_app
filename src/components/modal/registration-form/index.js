import React from "react";
import Button from "../../button";
import Input from "../../input";
import 'registration-form.css';


const RegistrationForm = ({closeAuthModal}) => {

    return (
        <div className='modal-wrapper'>
            <div className='modal-header'>
                <h3 className='modal-header__title'>Registration</h3>
                <div className='btn__close' onClick={closeAuthModal}></div>
            </div>
            <div className='modal-content'>
                <form className='modal-content__form'>
                    <Input label='Registration' placeholder='Enter login' variant='authModal'/>
                    <Input  label='Password' placeholder='Enter password' variant='authModal' type='password'/>
                    <Input  label='Confirm password' placeholder='Confirm password' variant='authModal' type='password'/>
                    <Button type='submit' label='Registration'/>
                </form>
            </div>
        </div>
    )
};

export default RegistrationForm;