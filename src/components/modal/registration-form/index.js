import React from "react";
import Button from "../../button";
import Input from "../../input";
import './registration-form.css'


const RegistrationForm = () => {

    return (
        <form className='modal-content__form'>
            <Input label='Registration' placeholder='Enter login' variant='authModal'/>
            <Input  label='Password' placeholder='Enter password' variant='authModal' type='password'/>
            <Input  label='Confirm password' placeholder='Confirm password' variant='authModal' type='password'/>
            <Button type='submit' label='Registration'/>
        </form>
    )
};

export default RegistrationForm;